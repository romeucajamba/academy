import { AuthenticateUseCase } from '../useCases/authenticateUseCase';
import { UserPrismaRepository } from '../../../repository/userRepository/userprismarepository';

export function makeAuthenticateUseCase(){
    const prismaRepositoryUser = new UserPrismaRepository();
    const authenticateUseCase = new AuthenticateUseCase(prismaRepositoryUser);

    return authenticateUseCase;
}