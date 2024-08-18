import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { getNearGymUseCase } from "../factories/getNearGymsFactory";

export async function getNearAcademy(request: FastifyRequest, reply: FastifyReply){
    const nearAcademySchema = z.object({
        latitude: z.number().refine((value)  => {
            return Math.abs(value) <= 90
        }),
        longitude: z.number().refine((value)  => {
            return Math.abs(value) <= 180
        }),
    });

    const { latitude, longitude} = nearAcademySchema.parse(request.query);
    
    const nearAcademy = getNearGymUseCase();
 
    const { getNearGyms } = await nearAcademy.execute({
        userLatitude:latitude,
        userLongitude:longitude
    })
    
    return reply.status(200).send({
        getNearGyms,
    })
}