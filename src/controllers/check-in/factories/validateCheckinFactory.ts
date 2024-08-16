import { ValidateChackInUseCase } from '../usecases/validateCheckIn/validate-checkins';
import { CheckInRepository } from '../../../repository/checkinRepository/checkInRepository';

export function validateCheckinUseCase(){
    const prismaCheckinRepository = new CheckInRepository();
    const checkinUseCase = new ValidateChackInUseCase(prismaCheckinRepository);

    return checkinUseCase;
}