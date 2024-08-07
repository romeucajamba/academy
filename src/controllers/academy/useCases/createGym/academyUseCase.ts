
import { GymRequest, GymResponse } from '../../../../interfaces/gymInterface/gymInterface';
import { GymRepository } from '../../../../interfaces/gymInterface/gymRepository';

export class GymUsecase {
    constructor(private academRepository: GymRepository){}

    async execute({
        title,
        descriptions,
        phone,
        latitude,
        longitude
    }:GymRequest): Promise<GymResponse>{

        const gym = await this.academRepository.create({
            title,
            descriptions,
            phone,
            latitude,
            longitude
        })

        return { gym }
    } 
}