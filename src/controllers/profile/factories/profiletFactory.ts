import { GetUserProfileUseCase } from '../useCase/getProfile/profiletUseCase';
import { UserPrismaRepository } from '../../../repository/userRepository/userprismarepository';

export function userprofileUseCase(){
    const prismaRepositoryUser = new UserPrismaRepository();
    const userUsecase = new GetUserProfileUseCase(prismaRepositoryUser);

    return userUsecase;
}