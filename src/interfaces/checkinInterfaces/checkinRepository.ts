import { Checkin, Prisma } from "@prisma/client";

export interface CheckinRepository {
    create(data: Prisma.CheckinUncheckedCreateInput): Promise <Checkin>;
    findByUserIdOnDate(userId: string, date: Date): Promise<Checkin | null>;
    findManyByUserId(userId: string, page: number): Promise <Checkin[]>;
    countByUserId(userId: string): Promise<number>;
    findById(checkInId: string): Promise<Checkin | null>;
    save(checkin: Checkin): Promise<Checkin>;
}