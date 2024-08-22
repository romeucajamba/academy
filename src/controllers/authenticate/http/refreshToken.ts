import { z } from 'zod';
import { FastifyRequest, FastifyReply  } from 'fastify';

export async function  refreshToken(request:FastifyRequest, reply:FastifyReply) {
    await request.jwtVerify({onlyCookie: true});

        const { role } = request.user
        const token = await reply.jwtSign(
            {
                role
            }, {
            sign: {
                sub: request.user.sub
            },
        });

        const refreshToken = await reply.jwtSign(
            {
                role
            },
            {
                sign:{
                    sub: request.user.sub,
                    expiresIn: '7d' //O Token expira depois de 7 dias se  o usuário ficar sem logar na app
                }
            }
        )
        return reply
            .setCookie('refreshToken', refreshToken, {
                path: '/', //Todas as rotas podem ler esse cookie
                secure: true, // o cookie vai ser encriptado no nosso https se estivermos a usar o https no servidor, o front não vai conseguir ler
                sameSite: true, //O cookie só será acessível dentro do mesmo domínio
                httpOnly: true, //O cookie só será acessível pelo backend da nossa aplicação e não pelo frontend
            })
            .status(200)
            .send({
            token
        });
}