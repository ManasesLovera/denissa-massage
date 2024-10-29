// src/dto/client.dto.ts

export interface CreateClientDTO {
    name: string;
    phoneNumber: number;
    password: string;
}

export interface UpdateClientDTO {
    name?: string;
    phoneNumber?: number;
}

export interface ClientResponseDTO {
    id: string;
    name: string;
    phoneNumber: number;
    bookingHistory: Array<{
        bookingId: string;
        serviceId: string;
        date: Date;
        time: string;
    }>;
    createdAt: Date;
    updatedAt: Date;
}
