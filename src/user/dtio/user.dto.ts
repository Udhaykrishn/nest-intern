import { IsEmail, IsOptional, IsString } from "class-validator";

export class UserDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
