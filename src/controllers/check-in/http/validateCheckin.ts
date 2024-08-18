import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { validateCheckinUseCase } from "../factories/validateCheckinFactory";

export async function valideteCheckIn(request: FastifyRequest, reply: FastifyReply){
    const validateChecInParams = z.object({
        checkInId: z.string().uuid(),
    })
     const { checkInId } = validateChecInParams.parse(request.params);

    const validate = validateCheckinUseCase() 
    await validate.execute({
        checkInId
    });

    return reply.status(204).send()
}