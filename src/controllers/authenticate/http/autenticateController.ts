import { z } from 'zod';
import { FastifyRequest, FastifyReply  } from 'fastify';
import { AuthenticateUseCase } from '../authenticateUseCase';
import { UserPrismaRepository } from '../../../repository/userRepositoryPrisma/userprismarepository';
import { InvalidCredentials } from '../../../error/error';

export async function  AutenticateUser(request:FastifyRequest, reply:FastifyReply) {

    const authenticateBodySchema = z.object({
        email: z.string({required_error: "E-mail require"}).email().min(6),
        password: z.string({required_error: "Pasword require"}).min(6)
    });

    const {  email, password } = authenticateBodySchema.parse(request.body);
    
    try {
        const prismaRepositoryUser = new UserPrismaRepository()
        const userUsecase = new AuthenticateUseCase(prismaRepositoryUser)

        await userUsecase.execute({
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