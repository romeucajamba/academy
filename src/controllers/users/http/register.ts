import { z } from 'zod';
import { FastifyRequest, FastifyReply  } from 'fastify';
import { EmailAlreadyExist } from '../../../error/error';
import { makeRegisterUseCase } from "../fatcories/make-register-use-case";

export async function  registerUser(request:FastifyRequest, reply:FastifyReply) {

    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6)
    });

    const { name, email, password } = registerBodySchema.parse(request.body);
    
    try {
        const registerUserUsecase = makeRegisterUseCase()
        await registerUserUsecase.execute({
            name,
            email, 
            password
        });

    } catch (err) {
        if(err instanceof EmailAlreadyExist){
            return reply.status(409).send({message: err.message});
        }
        throw err
    }
    return reply.status(201).send("Cadastro bem sucedido, seja bem-vindo ✔");
}