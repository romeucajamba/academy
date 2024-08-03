import { Users} from "@prisma/client";

export interface RepositoryUserData{
    name:string,
    email:string, 
    password:string 
}

export interface Response {
    user: Users
}

export interface AuthenticateUseCaseRequest {
    email: string, 
    password: string 
}

export interface AuthenticateUseCaseResponse {
    user: Users
}