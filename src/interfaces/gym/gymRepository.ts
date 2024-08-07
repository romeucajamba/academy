import { Gym } from "@prisma/client";

export interface GymRepository{
    finById(id: string): Promise<Gym | null>
}