import { Gym } from '@prisma/client';
import { GymRepository } from '../../interfaces/gym/gymRepository';
import { randomUUID } from "node:crypto";

export class GymsInMemmoryGymRepository implements GymRepository  {
    public gyms: Gym[] = [];

    async finById(id: string) {
        const gym = this.gyms.find((gym) => gym.id === id);

        if(!gym){
            return null;
        }

        return gym;
    }
}