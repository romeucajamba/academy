import { Prisma, Gym } from "@prisma/client";
import { GymRepository } from "../../interfaces/gymInterface/gymRepository";
import { NearGymRequest } from "../../interfaces/gymInterface/gymInterface";
import { connectionBD } from "../../lib/dbconnector";

export class GymRepositorY implements GymRepository{
    
    async create(data: Prisma.GymCreateInput){
        const gym = await connectionBD.gym.create({
            data
        });

        return gym
    }

    async finById(id: string) {
        const gym = await connectionBD.gym.findUnique({
            where:{
                id
            }
        });

        return gym
    }

    async findManyNearBy({userLatitude, userLongitude}: NearGymRequest){
        const gymsNear = await connectionBD.$queryRaw<Gym[]>`
            SELECT * FROM gyms
            WHERE (6371 * acos(cos(radians(${userLatitude})) * cos(radians(latitude)) * cos(radians(longitude) - radians(${userLongitude})) + sin(radians(${userLatitude})) * sin(radians(latitude)) )) =< 10
        `
        return gymsNear
    }

    async getGyms(query: string, page: number){
        const gyms = await connectionBD.gym.findMany({
            where:{
                title: {
                    contains: query
                }
            },
            take: 20,
            skip: (page - 1) * 20
        });

        return gyms
    }

}