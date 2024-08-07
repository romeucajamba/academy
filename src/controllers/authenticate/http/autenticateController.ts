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
        await autenticateUseCase.execute({
            email, 
            password
        });

    } catch (err) {
        if(err instanceof InvalidCredentials){
            return reply.status(409).send({message: err.message})
        }
        throw err
    }
    return reply.status(200).send({user: "Seja bem-vindo de volta ✔"});
}