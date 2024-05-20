import {
  Body,
  Controller,
  Res,
  Post,
  HttpStatus,
  HttpCode,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { Response } from "express";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post("signup")
  signup(@Body() signupDto: AuthDto) {
    return this.authService.signup(signupDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  async signin(@Res() res: Response, @Body() signinDto: AuthDto) {
    const tokenRespone = await this.authService.signup(signinDto);
    return res
      .status(HttpStatus.OK)
      .header("Authorization", `Bearer ${tokenRespone.access_token}`)
      .send();
  }
}
