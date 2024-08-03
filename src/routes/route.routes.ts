import { registerUser } from '../controllers/users/http/register';
import { FastifyInstance } from "fastify";
import { AutenticateUser } from '../controllers/authenticate/http/autenticateController';

export async function appRouter(app:FastifyInstance){
    app.post('/session', AutenticateUser);
    app.post('/users', registerUser)

}