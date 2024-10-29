export interface CreateAdminDTO {
    name: string;
    phoneNumber: number;
    password: string;
}

export interface UpdateAdminDTO {
    name?: string;
    phoneNumber?: number;
}

export interface AdminResponseDTO {
    id: string;
    name: string;
    phoneNumber: number;
    createdAt: Date;
    updatedAt: Date;
}
