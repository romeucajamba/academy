import { CheckinRepository } from "../../interfaces/checkinInterfaces/checkinRepository";
import { CheckinUseCaseRequest, CheckinUseCaseResponse } from "../../interfaces/checkinInterfaces/chenckinInterface";
import { UserRepository } from "../../interfaces/userInterface/userRepository";
import { BadError, ResourceNotFoundError } from "../../error/error";
import { GymRepository } from "../../interfaces/gym/gymRepository";
import { getDistanceBetweenCordenates } from "../../utils/get-distance-between-coordenate";
import {  IvalidAcessInAcademy } from "../../error/error";

export class CheckInUseCase {
    constructor(
        //private userRepository: UserRepository,
        private checkinRepository: CheckinRepository,
        private gymReository: GymRepository
    ){}

    async execute({ userId, gymId, userLatitude, userLongitude}: CheckinUseCaseRequest): Promise<CheckinUseCaseResponse> {
        /*const user = await this.userRepository.getById(userId);

        if(!user) {
            throw new ResourceNotFoundError();
        }*/

        const gym = await this.gymReository.finById(gymId);

        if(!gym) {
            throw new ResourceNotFoundError();
        }
        
        const distance = getDistanceBetweenCordenates({
            latitude: userLatitude,
            longitude: userLongitude
            },
            {
                latitude: gym.latitude.toNumber(), 
                longitude: gym.longitude.toNumber()
            }
        );

        const MAX_DISTANCE_IN_KILOMETERS = 0.1;

        if(distance > MAX_DISTANCE_IN_KILOMETERS){
            throw new IvalidAcessInAcademy();
        }

        const checkinOnSameDay = await this.checkinRepository.findByUserIdOnDate(userId, new Date());

        if(checkinOnSameDay) {
            throw new BadError("Is not be able to chek in twince in the same day");
        }

        const checkin = await this.checkinRepository.create({
            user_id: userId,
            gym_id: gymId
        })
   
        if(!checkin){
            throw new ResourceNotFoundError();
        }

        return {
            checkin
        }
    }
}