import { User } from "@prisma/client";
import { UserDto } from "./dtio";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    GetMe(user: User): {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        username: string;
        role: import(".prisma/client").$Enums.Role;
    };
    editUser(userId: number, dto: UserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        username: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
