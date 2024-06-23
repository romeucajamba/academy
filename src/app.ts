import fastify from "fastify";
import { CreateUsers } from './routes/POST/createUser';

export const app = fastify()

app.register(CreateUsers)