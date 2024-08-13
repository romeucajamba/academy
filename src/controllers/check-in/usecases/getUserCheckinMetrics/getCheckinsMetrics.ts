import { CheckinRepository } from "../../../../interfaces/checkinInterfaces/checkinRepository";
import { ResourceNotFoundError } from "../../../../error/error";
import { GetMetricRequest, ResponseMetrics} from "../../../../interfaces/checkinInterfaces/chenckinInterface";

export class GetUserMetricsUseCase {
    constructor(
        private checkinRepository: CheckinRepository,
    ){}

    async execute({userId}: GetMetricRequest): Promise<ResponseMetrics> {
        const checkinsTotal = await this.checkinRepository.countByUserId(userId);

        if(!checkinsTotal) {
            throw new ResourceNotFoundError();
        }

        return  { checkinsTotal }
    }
}