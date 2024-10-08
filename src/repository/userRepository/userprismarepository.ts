import { connectionBD } from '../../lib/dbconnector';
import { Prisma, Users } from '@prisma/client';
import { UserRepository } from '../../interfaces/userInterface/userRepository';


export class UserPrismaRepository implements UserRepository {
    async getById(userId: string): Promise<Users | null> {
        const user = await connectionBD.users.findUnique({
            where:{
                id: userId
            }
        })
        
        return user
    }

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