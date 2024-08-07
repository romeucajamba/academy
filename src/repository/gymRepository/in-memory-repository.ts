import { Gym, Prisma } from '@prisma/client';
import { GymRepository } from '../../interfaces/gymInterface/gymRepository';
import { randomUUID } from "node:crypto";
import { title } from 'node:process';

export class GymsInMemmoryGymRepository implements GymRepository  {
    public gyms: Gym[] = [];

    async finById(id: string) {
        const gym = this.gyms.find((gym) => gym.id === id);

        if(!gym){
            return null;
        }

        return gym;
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