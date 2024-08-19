import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import { checkInRouter } from "./routes/checkInRouter.routes";
import { UserRouter } from "./routes/userRoute.routes";
import { gymsRouter } from "./routes/gymsRouter.routes";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";

export const app = fastify();

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie:{
        cookieName: 'refreshToken',
        signed: false
    },

    sign: {
        expiresIn: '10m'
    }
});

app.register(fastifyCookie);
app.register(UserRouter);
app.register(gymsRouter);
app.register(checkInRouter);

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