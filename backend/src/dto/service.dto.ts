export interface CreateServiceDTO {
    name: string;
    description: string;
    price: number;
    duration: number; // Duration in minutes
}

export interface UpdateServiceDTO {
    name?: string;
    description?: string;
    price?: number;
    duration?: number; // Duration in minutes
}

export interface ServiceResponseDTO {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: number; // Duration in minutes
    createdAt: Date;
    updatedAt: Date;
}
