import { Role } from "../role";
export declare class AuthDto {
    username: string;
    email: string;
    password: string;
    role?: Role;
}
