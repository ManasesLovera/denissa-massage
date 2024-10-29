import mongoose, { Model } from 'mongoose';
const { Schema } = mongoose;

export default interface IAdmin extends Document {
    name: string;
    phoneNumber: string; // Change to string for validation
    authentication: {
        password: string;
        salt?: string;
        sessionToken?: string;
    };
}

const phoneRegex = /^(?:\+?(\d{1,3}))?[-. ]?(\(?\d{2,4}?\)?)[-. ]?(\d{3,4})[-. ]?(\d{4})$/;

const AdminSchema = new Schema<IAdmin>({
    name: {type: String, required: true},
    phoneNumber: { 
        type: String, 
        required: true,
        validate: {
            validator: (v: string) => phoneRegex.test(v),
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    authentication: {
        password: { type: String, required: true, select: false },
        salt: { type: String, select: false },
        sessionToken: { type: String, select: false },
    },
}, { timestamps: true } );

export const AdminModel: Model<IAdmin> = mongoose.model('Admin', AdminSchema);

export const getAll = () => AdminModel.find();
export const getById = (id: string) => AdminModel.findById(id);
export const create = (admin: Partial<IAdmin>) => new AdminModel(admin)
    .save().then((admin) => admin.toObject());
export const deleteById = (id: string) => AdminModel.findOneAndDelete({ _id: id});
export const updateById = (id: string, values: Partial<IAdmin>) => AdminModel.findByIdAndUpdate(id, values);