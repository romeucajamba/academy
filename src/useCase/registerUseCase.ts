
import { RepositoryUserData } from '../interfaces/registerUserInterface';
import { UserRepository } from '../interfaces/repositoryInterface';

export class RegisterUsecase {
    constructor(private createUser:UserRepository){}

    async repositoryData({
        name,
        email, 
        password_hash
    }:RepositoryUserData){

        await this.createUser.register({
            name,
            email, 
            password_hash 
        })
    }
 

}