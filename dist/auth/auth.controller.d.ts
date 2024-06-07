import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
import { Response } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signupDto: AuthDto): Promise<{
        access_token: string;
    }>;
    signin(res: Response, signinDto: AuthDto): Promise<Response<any, Record<string, any>>>;
}
