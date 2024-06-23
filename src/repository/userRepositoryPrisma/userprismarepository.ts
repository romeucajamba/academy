import { connectionBD } from '../../lib/dbconnector';
import { Prisma } from '@prisma/client';
import { UserRepository } from '../../interfaces/repositoryInterface';


export class UserPrismaRepository implements UserRepository {
    
    async register(data:Prisma.UsersCreateInput){
        const createUser = await connectionBD.users.create({data})
        
        return createUser
    }
}