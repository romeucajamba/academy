import { AuthenticateUseCase } from '../useCases/authenticateUseCase';
import { UserPrismaRepository } from '../../../repository/userRepositoryPrisma/UserRepository/userprismarepository';

export function makeAuthenticateUseCase(){
    const prismaRepositoryUser = new UserPrismaRepository();
    const authenticateUseCase = new AuthenticateUseCase(prismaRepositoryUser);

    return authenticateUseCase;
}