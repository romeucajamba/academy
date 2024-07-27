import {describe, test } from "vitest";
import {RegisterUsecase} from "../../controllers/users/useCase/registerUseCase";
import { UserPrismaRepository} from "../../repository/userRepositoryPrisma/userprismarepository";

describe("Register use case", async () => {
    test("Should hash return user password", async () => {
        
        const userRepository = new UserPrismaRepository();
        const userUseCase = new RegisterUsecase(userRepository);
        
       const { user } = await userUseCase.execute({
                name: "Imaculada Tomas",
                email: "imaculadatomas12@gmail.com",
                password_hash: "Imaculadatomas123"
        });

        console.log(user.password_hash);
    });
});