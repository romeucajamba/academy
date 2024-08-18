import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { getGymUseCase } from "../factories/getGymFactory";

export async function getAcademy(request: FastifyRequest, reply: FastifyReply){
    const saerchAcademySchema = z.object({
        query: z.string(),
        page: z.coerce.number().min(1).default(1)
    });

    const {query, page} = saerchAcademySchema.parse(request.body);
    
    const searchAcademy = getGymUseCase();
 
    const { getGyms } = await searchAcademy.execute({
        query,
        page
    })
    
    return reply.status(200).send({
        getGyms,
    })
}