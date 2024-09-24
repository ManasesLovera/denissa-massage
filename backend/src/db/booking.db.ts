import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookingSchema = new Schema({
    clientId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
    adminNotes: { type: String },
    clientNotes: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const BookingModel = mongoose.model('Booking', BookingSchema);

export const getAllBookings = () => BookingModel.find();
export const createBooking = () => BookingModel.create();