import { FastifyInstance } from "fastify";
import { getAcademy } from "../controllers/academy/http/searchAcademy";
import { getNearAcademy } from "../controllers/academy/http/getNearCademy";
import { createAcademy } from "../controllers/academy/http/createAcademy";
import { verifyJWT } from "../middleware/verify-jwt";

export async function gymsRouter(app:FastifyInstance){
    app.addHook('onRequest', verifyJWT);
    app.post('/gyms', createAcademy)
    app.post('/gysms/search', getAcademy);
    app.post('/gyms/near-gyms', getNearAcademy);
}