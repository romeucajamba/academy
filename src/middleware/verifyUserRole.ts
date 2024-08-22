import { FastifyRequest, FastifyReply } from "fastify"

export function verifyUser(roleVerify: 'ADMIN' | 'MEMBER'){
return async (request: FastifyRequest, reply: FastifyReply) => {
   const { role } = request.user

   if( role != roleVerify){
        return reply.status(401).send({messege: "Unauthorizad❌"});
   }
}
}