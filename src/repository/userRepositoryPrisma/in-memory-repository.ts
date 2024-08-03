import { Prisma, Users } from "@prisma/client";
import { UserRepository } from '../../interfaces/userInterface/userRepository';


export class InMemmoryRepository implements UserRepository {
    public users: Users[] = []

    async findByEmail(email: string){
        
        const user =  this.users.find( (user)  => user.email == email);
    
        if(!user){
            return null;
        }
        
        return user;
    }

    async register(data: Prisma.UsersCreateInput) {
        const user = {
            id: 'user-1',
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            create_at: new Date(),
        }

         this.users.push(user);

        return user
    }
}