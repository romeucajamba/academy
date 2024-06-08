import { app } from "./app";



app.listen({
    port: 4000,
    host: '0.0.0.0'
}).then(() => {
    console.log('servidor rodando na porta 4000')
})
