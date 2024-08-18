import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCheckinUseCase } from "../factories/createCheckinFactory";

export async function createCheckin(request: FastifyRequest, reply: FastifyReply){
    const createCheckinSchemSchema = z.object({
        latitude: z.number().refine((value)  => {
            return Math.abs(value) <= 90
        }),
        longitude: z.number().refine((value)  => {
            return Math.abs(value) <= 180
        }),
    });

    const createCheckInParamsSchema = z.object({
        gymId: z.string().uuid()
    });

    const { gymId } = createCheckInParamsSchema.parse(request.params)
    const {latitude, longitude} = createCheckinSchemSchema.parse(request.body);
    
    const registerCheckin = makeCheckinUseCase();
 
    const {} = await registerCheckin.execute({
        gymId,
        userId: request.user.sub,
        userLatitude:latitude,
        userLongitude:longitude
    })
    
    return reply.status(201).send("Academia criada com sucesso✔")
}