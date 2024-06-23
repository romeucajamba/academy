import { z } from 'zod';
import { FastifyRequest, FastifyReply  } from 'fastify';
import { RegisterUsecase } from '../useCase/registerUseCase';
import { UserPrismaRepository } from '../repository/userRepositoryPrisma/userprismarepository';
import { hash } from 'bcryptjs';

export async function  registerUser(request:FastifyRequest, reply:FastifyReply) {

    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    })

    const { name, email, password } = registerBodySchema.parse(request.body)
    const password_hash = await hash(password, 6) 



    try {
        const prismaRepositoryUser = new UserPrismaRepository()
        const userUsecase = new RegisterUsecase(prismaRepositoryUser)

        userUsecase.repositoryData({
            name,
            email, 
            password_hash
        })
        
    } catch (error) {
        
    }

   
    return reply.status(201).send()
}