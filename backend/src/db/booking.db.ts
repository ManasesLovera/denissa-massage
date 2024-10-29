import mongoose, { Document, Model } from 'mongoose';

const { Schema } = mongoose;

// Define an interface for the Booking model
interface IBooking extends Document {
    clientId: mongoose.Types.ObjectId;
    serviceId: mongoose.Types.ObjectId;
    date: Date;
    time: string;
    status: 'Pending' | 'Confirmed' | 'Cancelled';
    adminNotes?: string;
    clientNotes?: string;
}

// Booking Schema
const BookingSchema = new Schema<IBooking>(
    {
        clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
        serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
        date: { type: Date, required: true },
        time: { type: String, required: true },
        status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
        adminNotes: { type: String },
        clientNotes: { type: String },
    },
    { timestamps: true } // Automatically manage createdAt and updatedAt
);

// Create the model
export const BookingModel: Model<IBooking> = mongoose.model<IBooking>('Booking', BookingSchema);

// CRUD operations
export const getAll = () => BookingModel.find();
export const getById = (id: string) => BookingModel.findById(id);
export const create = (booking: Partial<IBooking>) => new BookingModel(booking).save().then((booking) => booking.toObject());
export const deleteById = (id: string) => BookingModel.findOneAndDelete({ _id: id });
export const updateById = (id: string, values: Partial<IBooking>) => BookingModel.findByIdAndUpdate(id, values);
