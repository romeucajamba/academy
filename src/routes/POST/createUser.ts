import { FastifyInstance } from "fastify";
import { registerUser } from '../../controllers/http/register';

export async function CreateUsers(app:FastifyInstance){
    app.post('/users', registerUser)

}