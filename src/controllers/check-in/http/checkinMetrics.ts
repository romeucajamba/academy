import { FastifyReply, FastifyRequest } from "fastify";
import { checkinUserMetricUseCase } from "../factories/getCheckinmetricFactory";

export async function checkInMetrics(request: FastifyRequest, reply: FastifyReply){
    
    const metrics = checkinUserMetricUseCase();
 
    const { checkinsTotal } = await metrics.execute({
        userId: request.user.sub,
    });
    
    return reply.status(200).send({
        checkinsTotal,
    })
}