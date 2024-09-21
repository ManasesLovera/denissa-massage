import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminSchema = new Schema({
    name: {type: String, required: true},
    phoneNumber: { type: Number, required: true },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
})