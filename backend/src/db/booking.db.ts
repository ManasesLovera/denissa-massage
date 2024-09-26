import mongoose from 'mongoose';
import {Booking} from '../models/booking.model'
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

export const getAll = () => BookingModel.find();
export const getById = (id: string) => BookingModel.findById(id);
export const create = (booking: Record<string,any>) => new BookingModel(booking)
    .save().then((user) => user.toObject());
export const deleteById = (id: string) => BookingModel.findOneAndDelete({ _id: id});
export const updateById = (id: string, values: Record<string, any>) => BookingModel.findByIdAndUpdate(id, values);