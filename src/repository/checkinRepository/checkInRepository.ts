import { Prisma, Checkin } from "@prisma/client";
import { CheckinRepository } from "../../interfaces/checkinInterfaces/checkinRepository";
import { connectionBD } from "../../lib/dbconnector";
import dayjs from "dayjs";
import { } from "dayjs";

export class CheckInRepository implements CheckinRepository {
    
    async findById(checkInId: string) {
        const checkIn = await connectionBD.checkin.findUnique({
            where:{
                id: checkInId
            }
        });

        return checkIn
    }

    async findByUserIdOnDate(userId: string, date: Date) {
        const startOfTheDay = dayjs(date).startOf("date");
        const endOfTheDay = dayjs(date).endOf("date");

        const checkin = await connectionBD.checkin.findFirst({
            where:{
                user_id: userId,
                createAt: {
                    gte: startOfTheDay.toDate(),
                    lte: endOfTheDay.toDate()
                }
            }
        });

        return checkin
    }

    async findManyByUserId(userId: string, page: number) {
        const checkIns = await connectionBD.checkin.findMany({
            where:{
                user_id: userId
            },
            take: 20,
            skip: (page - 1) * 20
        });

        return checkIns;
    }

    async countByUserId(userId: string) {
        const checkIn = await connectionBD.checkin.count({
            where: {
                user_id: userId
            }
        });

        return checkIn
    }

    async create(data: Prisma.CheckinUncheckedCreateInput) {
        const checkIn = await connectionBD.checkin.create({
            data
        });

        return checkIn;
    }

    async save(data: Checkin) {
        const checkIn = await connectionBD.checkin.update({
            where:{
                id: data.id
            },
            data
        });

        return checkIn
    }
}