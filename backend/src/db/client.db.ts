import mongoose from 'mongoose';
const { Schema } = mongoose;

const clientSchema = new Schema({
    name: String,
    phoneNumber: { type: Number, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
    bookingHistory: [
        {
          bookingId: { type: Schema.Types.ObjectId, ref: 'Booking' },
          serviceId: { type: Schema.Types.ObjectId, ref: 'Service' },
          date: { type: Date },
          time: { type: String }
        }
      ],
      createdAt: { type: Date, default: Date.now },
      updatedAt: { type: Date, default: Date.now }
});