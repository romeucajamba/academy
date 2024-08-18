import { FastifyReply, FastifyRequest } from "fastify";
import { userprofileUseCase } from "../factories/profiletFactory";

export async function profileController(request: FastifyRequest, reply: FastifyReply){

    const getUserProfile = userprofileUseCase();
    
    const {  user } = await getUserProfile.execute({
        userId: request.user.sub
    });

    return reply.status(200).send({
        user: {
            ...user,
            password_hash: undefined
        }
    });
}