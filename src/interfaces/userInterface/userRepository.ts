import { Prisma, Users } from "@prisma/client";

export interface UserRepository{
    register(data:Prisma.UsersCreateInput):Promise<Users>;
    findByEmail(email:string):Promise <Users | null>;
}