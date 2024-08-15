
import { ValidateCheckInRequest, ValidateCheckInResponse } from '../../../../interfaces/checkinInterfaces/chenckinInterface';
import { CheckinRepository } from '../../../../interfaces/checkinInterfaces/checkinRepository';
import { ResourceNotFoundError } from "../../../../error/error";

export class ValidateChackInUseCase {
    constructor(private checkinRepository: CheckinRepository){}

    async execute({
        checkInId
    }:ValidateCheckInRequest): Promise<ValidateCheckInResponse>{

        const checkIn = await this.checkinRepository.findById(checkInId);

        if(!checkIn){
            throw new ResourceNotFoundError();
        }

        checkIn.validatedAt = new Date();

        await this.checkinRepository.save(checkIn);
        
        return { checkIn }
    } 
}