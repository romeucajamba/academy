import { UserRepository } from "../../../interfaces/userInterface/userRepository";
import { AuthenticateUseCaseRequest, AuthenticateUseCaseResponse } from "../../../interfaces/userInterface/registerUserInterface";
import { InvalidCredentials } from "../../../error/error";
import { compare } from "bcryptjs";

export class AuthenticateUseCase {
    constructor(
        private usersRepository: UserRepository
    ){}

    async execute({ email, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if(!user) {
            throw new InvalidCredentials();
        }

        const doesPasswordMatches = await compare(password, user.password_hash);

        if(!doesPasswordMatches){
            throw new InvalidCredentials()
        }

        return {
            user
        }
    }
}