import { Prisma, Users } from "@prisma/client";
import { UserRepository } from '../../../interfaces/userInterface/userRepository';
import { randomUUID } from "node:crypto";

export class InMemmoryRepository implements UserRepository {
    public users: Users[] = [];

    async getById(userId: string): Promise<Users | null> {
        const user = this.users.find((user) => user.id === userId);
        return user || null;
    }

    async findByEmail(email: string): Promise<Users | null> {
        const user = this.users.find((user) => user.email === email);
        return user || null;
    }

    async register(data: Prisma.UsersCreateInput): Promise<Users> {
        const user: Users = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            createdAt: new Date(),
        };

        this.users.push(user);
        return user
    }
}