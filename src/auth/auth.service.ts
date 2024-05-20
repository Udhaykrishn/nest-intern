import { ForbiddenException, Injectable } from "@nestjs/common";
import { comparePass, hashPassword } from "./password";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import { Role } from "./role/role.enum";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class AuthService {
  private readonly jwtSecret: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService
  ) {
    this.jwtSecret = this.config.get<string>("JWT_SECRET");
  }

  async signup({ role, password, ...signupDto }: AuthDto) {
    const userRole = role || Role.USER;
    const hashedPassword = await hashPassword(password);

    try {
      const result = await this.prisma.user.create({
        data: {
          ...signupDto,
          role: userRole,
          hash: hashedPassword,
        },
      });
      return this.signToken(result.id, result.email);
    } catch (error) {
      throw new ForbiddenException("Credentials taken");
    }
  }

  async login(signinDto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: signinDto.email,
      },
    });

    if (!user || !(await comparePass(signinDto.password, user.hash))) {
      throw new ForbiddenException("Credentials incorrect");
    }

    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: "7d",
      secret: this.jwtSecret,
    });
    return {
      access_token: token,
    };
  }
}
