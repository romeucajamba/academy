import { z } from 'zod';
import { FastifyRequest, FastifyReply  } from 'fastify';
import { InvalidCredentials } from '../../../error/error';
import { makeAuthenticateUseCase } from "../factories/make-authenticate-use-case";

export async function  AutenticateUser(request:FastifyRequest, reply:FastifyReply) {

    const authenticateBodySchema = z.object({
        email: z.string({required_error: "E-mail require"}).email().min(6),
        password: z.string({required_error: "Pasword require"}).min(6)
    });

    const {  email, password } = authenticateBodySchema.parse(request.body);
    
    try {
        const autenticateUseCase = makeAuthenticateUseCase()
       const { user } = await autenticateUseCase.execute({
            email, 
            password
        });

        const token = await reply.jwtSign({}, {
            sign: {
                sub: user.id
            },
        });

        return reply.status(200).send({
            token
        });

    } catch (err) {
        if(err instanceof InvalidCredentials){
            return reply.status(409).send({message: err.message})
        }
        throw err
    }
}