
import { RepositoryUserData } from '../../interfaces/registerUserInterface';
import { UserRepository } from '../../interfaces/repositoryInterface';
import { EmailAlreadyExist } from '../../error/error';




export class RegisterUsecase {
    constructor(private createUser:UserRepository){}

    async repositoryData({
        name,
        email, 
        password_hash
    }:RepositoryUserData){

        const surchForEmail = await this.createUser.findByEmail(email)

        if(surchForEmail){
            throw new EmailAlreadyExist('email já cadastrado na plataforma')
        }

        await this.createUser.register({
            name,
            email, 
            password_hash 
        })
    }
 

}