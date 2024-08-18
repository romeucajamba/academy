import { registerUser } from '../controllers/users/http/register';
import { FastifyInstance } from "fastify";
import { AutenticateUser } from '../controllers/authenticate/http/autenticateController';
import { profileController } from "../controllers/profile/http/profileController";
import { verifyJWT } from "../middleware/verify-jwt";
import { getAcademy } from "../controllers/academy/http/searchAcademy";
import { getNearAcademy } from "../controllers/academy/http/getNearCademy";
import { createAcademy } from "../controllers/academy/http/createAcademy";

export async function UserRouter(app:FastifyInstance){
    app.post('/session', AutenticateUser);
    app.post('/users', registerUser);
    /**Authenticated */
    app.get('/me', {onRequest: [verifyJWT]}, profileController);
}