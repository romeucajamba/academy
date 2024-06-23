import { z } from 'zod';
import { FastifyRequest, FastifyReply  } from 'fastify';

export async function  registerUser(request:FastifyRequest, reply:FastifyReply) {

    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = registerBodySchema.parse(request.body)

   
    return reply.status(201).send()
}