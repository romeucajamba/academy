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

export interface SearchGymRequest {
    query: string,
    page: number
}

export interface GymsResponse {
    getGyms: Gym[]
}

export interface NearGymRequest {
    userLatitude: number,
    userLongitude: number
}

export interface NearGymResponse {
    getNearGyms: Gym[]
}