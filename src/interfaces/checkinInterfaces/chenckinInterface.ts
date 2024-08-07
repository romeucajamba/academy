import { Checkin } from "@prisma/client"

export interface CheckinUseCaseRequest{
    userId: string,
    gymId: string,
    userLatitude: number,
    userLongitude: number
}

export interface CheckinUseCaseResponse{
    checkin: Checkin,
}

export interface Coordinate{
    latitude: number,
    longitude: number
}