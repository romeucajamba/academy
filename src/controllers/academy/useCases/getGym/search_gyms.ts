
import { SearchGymRequest, GymsResponse } from '../../../../interfaces/gymInterface/gymInterface';
import { GymRepository } from '../../../../interfaces/gymInterface/gymRepository';

export class SearchGymUseCase {
    constructor(private academRepository: GymRepository){}

    async execute({
        query, page
    }:SearchGymRequest): Promise<GymsResponse>{

        const getGyms = await this.academRepository.getGyms(query, page);

        return  {getGyms} 
    } 
}