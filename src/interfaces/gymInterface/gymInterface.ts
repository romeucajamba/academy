import { Gym } from "@prisma/client"

export interface GymRequest {
    title: string,
    descriptions: string | null
    phone: string,
    latitude: number,
    longitude: number
}

export interface GymResponse {
    gym: Gym
}