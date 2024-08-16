import { GetUserMetricsUseCase } from '../usecases/getUserCheckinMetrics/getCheckinsMetrics';
import { CheckInRepository } from '../../../repository/checkinRepository/checkInRepository';

export function checkinUserMetricUseCase(){
    const prismaCheckinRepository = new CheckInRepository();
    const checkinUseCase = new GetUserMetricsUseCase(prismaCheckinRepository);

    return checkinUseCase;
}