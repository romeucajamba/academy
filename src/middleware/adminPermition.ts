import { FastifyRequest, FastifyReply } from "fastify"

export async function onlyAdmin(request: FastifyRequest, reply: FastifyReply){
   const { role } = request.user

   if( role == "MEMBER"){
        return reply.status(401).send({messege: "Unauthorizad❌"});
   }
}