
import { ValidateCheckInRequest, ValidateCheckInResponse } from '../../../../interfaces/checkinInterfaces/chenckinInterface';
import { CheckinRepository } from '../../../../interfaces/checkinInterfaces/checkinRepository';
import { BadError, ResourceNotFoundError } from "../../../../error/error";
import dayjs from 'dayjs';

export class ValidateChackInUseCase {
    constructor(private checkinRepository: CheckinRepository){}

    async execute({
        checkInId
    }:ValidateCheckInRequest): Promise<ValidateCheckInResponse>{

        const checkIn = await this.checkinRepository.findById(checkInId);

        if(!checkIn){
            throw new ResourceNotFoundError();
        }

        const distanceInMinutesFromCheckinCreating = dayjs(new Date()).diff(
            checkIn.createAt, 
            'minutes'
        );

        if(distanceInMinutesFromCheckinCreating){
            throw new BadError("The checkin can only be validated until 20 minutes of its creation");
        }

        checkIn.validatedAt = new Date();

        await this.checkinRepository.save(checkIn);
        
        return { checkIn }
    } 
}