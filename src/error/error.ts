export class BadError extends Error {}

export class EmailAlreadyExist extends  Error{
   
     constructor(){
        super('e-mail já existe na plataforma')
    }
}