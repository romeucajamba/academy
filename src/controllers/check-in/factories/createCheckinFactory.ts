import { CheckInUseCase } from '../usecases/createCheckIn/check-in-UseCase';
import { CheckInRepository } from '../../../repository/checkinRepository/checkInRepository';
import { GymRepositorY } from "../../../repository/gymRepository/gymRepository";

export function makeCheckinUseCase(){
    const prismaCheckinRepository = new CheckInRepository();
    const prismaGymRepository = new GymRepositorY()
    const checkinUseCase = new CheckInUseCase(prismaCheckinRepository, prismaGymRepository);

    return checkinUseCase;
}