import { FetchUserCheckinHistoryUseCase } from '../usecases/checkIn_history/member-checkin-history';
import { CheckInRepository } from '../../../repository/checkinRepository/checkInRepository';

export function checkinHistoryUseCase(){
    const prismaCheckinRepository = new CheckInRepository();
    const checkinUseCase = new FetchUserCheckinHistoryUseCase(prismaCheckinRepository);

    return checkinUseCase;
}