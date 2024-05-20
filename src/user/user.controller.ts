import { Controller, Get, Patch, Body, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { UserDto } from "./dtio";
import { JwtGuard } from "src/auth/guard";
import { UserService } from "./user.service";
import { GetUser } from "src/auth/decorator";

@UseGuards(JwtGuard)
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("me")
  GetMe(@GetUser("id") user: User) {
    return user;
  }
  @Patch()
  editUser(@GetUser("id") userId: number, @Body() dto: UserDto) {
    return this.userService.editUser(userId, dto);
  }
}
