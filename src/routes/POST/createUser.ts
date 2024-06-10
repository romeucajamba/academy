import { FastifyInstance } from "fastify";
import { z } from 'zod';
import { connectionBD } from '../../lib/dbconnector';


export async function CreateUsers(app:FastifyInstance){
    app.post('/users', async (request, reply) => {

        const registerBodySchema = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(6)
        })

        const { name, email, password } = registerBodySchema.parse(request.body)

        const createUser = await connectionBD.users.create({
            data:{
                name,
                email,
                password_hash:password
            }
        }) 

        return reply.status(201).send()
    })

}