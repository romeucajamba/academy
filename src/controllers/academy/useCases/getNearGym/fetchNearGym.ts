
import { NearGymRequest, NearGymResponse } from '../../../../interfaces/gymInterface/gymInterface';
import { GymRepository } from '../../../../interfaces/gymInterface/gymRepository';

export class SearchNearGymUseCase {
    constructor(private academRepository: GymRepository){}

    async execute({
        userLatitude,
        userLongitude
    }:NearGymRequest): Promise<NearGymResponse>{

        const getNearGyms = await this.academRepository.findManyNearBy({userLatitude, userLongitude});

        return  {getNearGyms} 
    } 
}