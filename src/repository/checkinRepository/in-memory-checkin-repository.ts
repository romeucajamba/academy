import { Checkin, Prisma, Users } from "@prisma/client";
import { CheckinRepository } from '../../interfaces/checkinInterfaces/checkinRepository';
import {  randomUUID } from "node:crypto";
import dayjs from "dayjs";

export class CheckInInMemmoryRepository implements CheckinRepository {
    private checkIn: { 
        id: string; 
        user_id: string; 
        gym_id: string; 
        validatedAt: Date | null; 
        createAt: Date; 
    }[] = [];

    async findByUserIdOnDate(userId: string, date: Date) {

        const startOfTheDay = dayjs(date).startOf("date");
        const endOfTheDay = dayjs(date).endOf("date");

        const checkInOnSameDate = this.checkIn.find((checkin) => {
            const checkInDate = dayjs(checkin.createAt);
            const isOnSameDate = checkInDate.isAfter(startOfTheDay) && checkInDate.isBefore(endOfTheDay);

            return checkin.user_id === userId && isOnSameDate;
        });

        if(!checkInOnSameDate){
            return null
        }
    
       return checkInOnSameDate
    }

    async create(data: Prisma.CheckinUncheckedCreateInput) {
        const checkin = {
            id: randomUUID(),
            user_id: data.user_id,
            gym_id: data.gym_id,
            validatedAt: data.validatedAt ? new Date(data.validatedAt) : null,
            createAt: new Date()
        };

        this.checkIn.push(checkin);

        return checkin;
    }
   
}