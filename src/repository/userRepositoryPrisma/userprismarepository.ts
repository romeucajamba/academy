import { connectionBD } from '../../lib/dbconnector';
import { Prisma } from '@prisma/client';
import { UserRepository } from '../../interfaces/userInterface/repositoryInterface';


export class UserPrismaRepository implements UserRepository {

    async findByEmail(email:string){
        const userEmail = await connectionBD.users.findUnique({
            where:{
                email
            }
        })
        
        return userEmail
    }
    
    async register(data:Prisma.UsersCreateInput){
        const createUser = await connectionBD.users.create({data})

        return createUser
    }
}