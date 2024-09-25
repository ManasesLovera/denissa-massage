export type Booking = {
    clientId: number,
    serviceId: number,
    date: Date;
    time: Date,
    status: "Pending" | "Confirmed" | "Canceled",
    adminNotes: string,
    clientNotes: string
};