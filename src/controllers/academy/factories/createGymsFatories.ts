import { GymUseCase } from '../useCases/createGym/academyUseCase';
import { GymRepositorY } from '../../../repository/gymRepository/gymRepository';

export function makeGymUseCase(){
    const prismaGymRepository = new GymRepositorY();
    const gymUseCase = new GymUseCase(prismaGymRepository);

    return gymUseCase;
}