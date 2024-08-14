import { Gym, Prisma } from '@prisma/client';
import { GymRepository } from '../../interfaces/gymInterface/gymRepository';
import { randomUUID } from "node:crypto";
import { NearGymRequest } from "../../interfaces/gymInterface/gymInterface";
import { getDistanceBetweenCordenates } from '../../utils/get-distance-between-coordenate';
export class GymsInMemmoryGymRepository implements GymRepository  {
    public gyms: Gym[] = [];

    async finById(id: string) {
        const gym = this.gyms.find((gym) => gym.id === id);

        if(!gym){
            return null;
        }

        return gym;
    }

   async  findManyNearBy(params: NearGymRequest) {
        return this.gyms.filter(items => {
            const distance = getDistanceBetweenCordenates({
                latitude: params.userLatitude, 
                longitude: params.userLongitude
            },
            {
                latitude: items.latitude.toNumber(),
                longitude: items.longitude.toNumber()
            }
        );
        
        return distance < 10;
        });
    }

    async getGyms(query: string, page: number) {
        return this.gyms.filter(items => items.title.includes(query)).slice((page -1) * 20, page * 20)
    }

    async create(data: Prisma.GymCreateInput) {
        const gym: Gym = {
            id: data.id ?? randomUUID(),
            title: data.title,
            descriptions: data.descriptions ?? null,
            phone: data.phone ?? null,
            latitude: new Prisma.Decimal(data.latitude.toString()),
            longitude: new Prisma.Decimal(data.longitude.toString()),
            createadAt: new Date()
        };

        this.gyms.push(gym);

        return gym;
    }
}