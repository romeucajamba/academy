import { Prisma } from "@prisma/client";


export class InMemmoryRepository {
    public users: any[] = []

    async create(data:Prisma.UsersCreateInput){
        await this.users.push(data);
    }
}