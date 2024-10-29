// src/dto/booking.dto.ts

export interface CreateBookingDTO {
    clientId: string; // Reference to Client ID
    serviceId: string; // Reference to Service ID
    date: Date;
    time: string;
    adminNotes?: string;
    clientNotes?: string;
}

export interface UpdateBookingDTO {
    status?: 'Pending' | 'Confirmed' | 'Cancelled';
    adminNotes?: string;
    clientNotes?: string;
}

export interface BookingResponseDTO {
    id: string;
    clientId: string;
    serviceId: string;
    date: Date;
    time: string;
    status: 'Pending' | 'Confirmed' | 'Cancelled';
    adminNotes?: string;
    clientNotes?: string;
    createdAt: Date;
    updatedAt: Date;
}
