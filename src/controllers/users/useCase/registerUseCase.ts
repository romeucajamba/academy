
import { RepositoryUserData, Response } from '../../../interfaces/userInterface/registerUserInterface';
import { UserRepository } from '../../../interfaces/userInterface/repositoryInterface';
import { EmailAlreadyExist } from '../../../error/error';

export class RegisterUsecase {
    constructor(private createUser:UserRepository){}

    async execute({
        name,
        email, 
        password_hash
    }:RepositoryUserData): Promise<Response>{

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