import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function profileController(request: FastifyRequest, reply: FastifyReply){
    await request.jwtVerify()
    console.log(request.user.sub)
}