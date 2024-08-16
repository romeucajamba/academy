import { SearchNearGymUseCase } from '../useCases/getNearGym/fetchNearGym';
import { GymRepositorY } from '../../../repository/gymRepository/gymRepository';

export function getNearGymUseCase(){
    const prismaGymRepository = new GymRepositorY();
    const gymUseCase = new SearchNearGymUseCase(prismaGymRepository);

    return gymUseCase;
}