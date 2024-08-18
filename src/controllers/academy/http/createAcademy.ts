import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGymUseCase } from "../factories/createGymsFatories";

export async function createAcademy(request: FastifyRequest, reply: FastifyReply){
    const createAcademySchema = z.object({
        title: z.string(),
        descriptions: z.string().nullable(),
        phone: z.string().nullable(),
        latitude: z.number().refine((value)  => {
            return Math.abs(value) <= 90
        }),
        longitude: z.number().refine((value)  => {
            return Math.abs(value) <= 180
        }),
    });

    const {title, phone, longitude, latitude, descriptions} = createAcademySchema.parse(request.body);
    
    const registerAcademy = makeGymUseCase();
 
    await registerAcademy.execute({
         title, 
        phone, 
        longitude, 
        latitude,
        descriptions
    })
    
    return reply.status(201).send("Academia criada com sucesso✔")
}