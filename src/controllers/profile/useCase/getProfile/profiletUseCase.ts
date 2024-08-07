import { UserRepository } from "../../../../interfaces/userInterface/userRepository";
import { Response } from "../../../../interfaces/userInterface/registerUserInterface";
import { ResourceNotFoundError } from "../../../../error/error";

interface UserId{
    userId: string
}

export class GetUserProfileUseCase {
    constructor(
        private usersRepository: UserRepository
    ){}

    async execute({ userId }: UserId): Promise<Response> {
        const user = await this.usersRepository.getById(userId);

        if(!user) {
            throw new ResourceNotFoundError();
        }

        return {
            user
        }
    }
}