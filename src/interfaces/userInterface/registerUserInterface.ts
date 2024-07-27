import { Users} from "@prisma/client";

export interface RepositoryUserData{
    name:string,
    email:string, 
    password:string 
}

export interface Response {
    user: Users
}