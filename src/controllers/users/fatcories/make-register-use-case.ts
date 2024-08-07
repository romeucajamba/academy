import { RegisterUsecase } from '../useCases/registerUseCase';
import { UserPrismaRepository } from '../../../repository/userRepositoryPrisma/UserRepository/userprismarepository';

export function makeRegisterUseCase(){
    const prismaRepositoryUser = new UserPrismaRepository();
    const userUsecase = new RegisterUsecase(prismaRepositoryUser);

    return userUsecase;
}