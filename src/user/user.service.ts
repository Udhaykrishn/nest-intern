import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { UserDto } from "./dtio";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async editUser(userID: number, dto: UserDto) {
    const user = await this.prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        ...dto,
      },
    });
    delete user.hash;
    return user;
  }
}
