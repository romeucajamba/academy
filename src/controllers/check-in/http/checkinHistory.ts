import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { checkinHistoryUseCase } from "../factories/checkinHistoryFactory";

export async function checkInHistory(request: FastifyRequest, reply: FastifyReply){
    const checkInHistorySchema = z.object({
        page: z.coerce.number().min(1).default(1)
    });

    const { page } = checkInHistorySchema.parse(request.query);
    
    const history = checkinHistoryUseCase();
 
    const { checkins } = await history.execute({
        userId: request.user.sub,
        page
    });
    
    return reply.status(200).send({
        checkins,
    })
}