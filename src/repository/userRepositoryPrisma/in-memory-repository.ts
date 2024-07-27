import { Prisma, Users } from "@prisma/client";
import { UserRepository } from '../../interfaces/userInterface/repositoryInterface';
import { string } from "zod";


export class InMemmoryRepository implements UserRepository {
    public users: any[] = []
    public emails: string[] = []

    async findByEmail(email: string){
        
        const user = await this.emails.find( emails => emails === email);

        return user
    }

    async register(data: Prisma.UsersCreateInput) {
        const createUser = await this.users.push(data);

        return createUser
    }
}