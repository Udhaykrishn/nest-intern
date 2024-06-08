import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private readonly prisma;
    private readonly jwt;
    private readonly config;
    private readonly jwtSecret;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup({ role, password, ...signupDto }: AuthDto): Promise<{
        access_token: string;
    }>;
    login(signinDto: AuthDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: string): Promise<{
        access_token: string;
    }>;
}
