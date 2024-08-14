import { Gym, Prisma } from "@prisma/client";
import { NearGymRequest } from "../../interfaces/gymInterface/gymInterface";
export interface GymRepository{
    finById(id: string): Promise<Gym | null>;
    create(data: Prisma.GymCreateInput): Promise<Gym>;
    getGyms(query: string, page: number): Promise<Gym[]>;
    findManyNearBy(params: NearGymRequest): Promise<Gym[]>;
}