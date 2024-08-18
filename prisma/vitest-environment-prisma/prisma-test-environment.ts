import { Environment } from "vitest";
import "dotenv/config";
import { randomUUID } from "node:crypto"
import { execSync } from "child_process";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


/*Se estiveres a utilzar postgres cria essa função para dentro do postgres criar
 tabelas para testes e assim não usar as tabelas orginais e encher de dados do teste*/

 function generateDateaBaseURL(schema: string){
    if(!process.env.DATABASE_URL){
        throw new Error("Please provide a Data BASE URL environment varible")
    }

    const url = new URL(process.env.DATABASE_URL);

    url.searchParams.set('schema', schema);

    return url.toString()
 }
 ///
export default <Environment>{
    name: 'prisma',
    async setup() {
        const schema = randomUUID();

        const databaseURL = generateDateaBaseURL(schema);

        process.env.DATABASE_URL = databaseURL;

        execSync('npx prisma migarte deploy')

        return {
           async teardown() {
               await prisma.$executeRawUnsafe(
                `DROP SCHEMA IF EXISTS "${schema}" CASCADE`,
               );

               await prisma.$disconnect()
            }
        };
    },
    transformMode: "web"  // ou "ssr", dependendo do seu caso
};
