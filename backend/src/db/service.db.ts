import mongoose, { Document, Model } from 'mongoose';

const { Schema } = mongoose;

// Define an interface for the Service model
interface IService extends Document {
    name: string;
    description: string;
    price: number;
    duration: number; // Duration in minutes or another unit
}

// Service Schema
const ServiceSchema = new Schema<IService>(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        duration: { type: Number, required: true },
    },
    { timestamps: true } // Automatically manage createdAt and updatedAt
);

// Create the model
export const ServiceModel: Model<IService> = mongoose.model<IService>('Service', ServiceSchema);

// CRUD operations
export const getAll = () => ServiceModel.find();
export const getById = (id: string) => ServiceModel.findById(id);
export const create = (service: Partial<IService>) => new ServiceModel(service).save().then((service) => service.toObject());
export const deleteById = (id: string) => ServiceModel.findOneAndDelete({ _id: id });
export const updateById = (id: string, values: Partial<IService>) => ServiceModel.findByIdAndUpdate(id, values);
