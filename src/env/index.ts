import 'dotenv';
import { z } from 'zod';
import { BadRequestError} from '../error/badrequest';


const schemaEnv = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(4000)
})

const _env = schemaEnv.safeParse(process.env)

if (_env.success == false){
    console.error('Variáveis de ambient inválida', _env.error.format())

    throw new BadRequestError('Variáveis de ambient inválida')
}

export const env = _env.data