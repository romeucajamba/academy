import fastify from "fastify";
import { CreateUsers } from './routes/POST/createUser.routes';
import { ZodError } from "zod";
import { env } from "./env";

export const app = fastify()

app.register(CreateUsers)

app.setErrorHandler((error, _, reply) => {
    if(error instanceof ZodError){
        return reply.status(400).send({message: 'Validation error.', issues: error.format()})
    }

    if(env.NODE_ENV != 'production'){
        console.error(error)
    }
    else {
        //Utilizar ferramenta de observação para poder ser avisado que o erro aconteceu quando estiver em produção
    }

    return reply.status(500).send({message:'erro interno no servidor'})
})