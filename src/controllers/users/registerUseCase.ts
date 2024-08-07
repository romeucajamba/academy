
import { RepositoryUserData, Response } from '../../interfaces/userInterface/registerUserInterface';
import { UserRepository } from '../../interfaces/userInterface/userRepository';
import { EmailAlreadyExist } from '../../error/error';
import { hash } from 'bcryptjs';

export class RegisterUsecase {
    constructor(private createUser:UserRepository){}

    async execute({
        name,
        email, 
        password
    }:RepositoryUserData): Promise<Response>{

        const password_hash = await hash(password, 6); 

        const surchForEmail = await this.createUser.findByEmail(email)

        if(surchForEmail){
            throw new EmailAlreadyExist();
        }

       const user = await this.createUser.register({
            name,
            email, 
            password_hash 
        });

        return { user }
    }
 

}