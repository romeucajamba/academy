import { CheckinRepository } from "../../../../interfaces/checkinInterfaces/checkinRepository";
import { FetcRequest, FetchResponse } from "../../../../interfaces/checkinInterfaces/chenckinInterface";
import { ResourceNotFoundError } from "../../../../error/error";

export class FetchUserCheckinHistoryUseCase {
    constructor(
        private checkinRepository: CheckinRepository,
    ){}

    async execute({ userId, page }: FetcRequest): Promise<FetchResponse> {
        const checkins = await this.checkinRepository.findManyByUserId(userId, page);

        if(!checkins) {
            throw new ResourceNotFoundError();
        }

        return { checkins }
    }
}