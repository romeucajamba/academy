import { SearchGymUseCase } from '../useCases/getGym/search_gyms';
import { GymRepositorY } from '../../../repository/gymRepository/gymRepository';

export function getGymUseCase(){
    const prismaGymRepository = new GymRepositorY();
    const gymUseCase = new SearchGymUseCase(prismaGymRepository);

    return gymUseCase;
}