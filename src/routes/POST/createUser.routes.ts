import { FastifyInstance } from "fastify";
import { registerUser } from '../../controllers/users/http/register';

export async function CreateUsers(app:FastifyInstance){
    app.post('/users', registerUser)

}