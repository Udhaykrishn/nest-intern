import { PrismaService } from "../prisma/prisma.service";
import { UserDto } from "./dtio";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    editUser(userID: number, dto: UserDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        hash: string;
        username: string;
        role: import(".prisma/client").$Enums.Role;
    }>;
}
