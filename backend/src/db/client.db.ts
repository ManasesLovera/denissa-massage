import mongoose, { Model } from 'mongoose';
const { Schema } = mongoose;

// Define an interface for the Client model
interface IClient extends Document {
  name: string;
  phoneNumber: string; // Change to string for validation
  authentication: {
      password: string;
      salt?: string;
      sessionToken?: string;
  };
  bookingHistory: Array<{
      bookingId: mongoose.Types.ObjectId;
      serviceId: mongoose.Types.ObjectId;
      date: Date;
      time: string;
  }>;
}

// Regex pattern for validating phone numbers
const phoneRegex = /^(?:\+?(\d{1,3}))?[-. ]?(\(?\d{2,4}?\)?)[-. ]?(\d{3,4})[-. ]?(\d{4})$/;

const ClientSchema = new Schema<IClient>({
    name: { type: String, required: true },
    phoneNumber: { 
      type: String, 
      required: true ,
      validate: {
        validator: (v: string) => phoneRegex.test(v),
        message: (props) => `${props.value} is not a valid number!`
      }
    },
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
      ]
}, { timestamps: true } );

export const ClientModel: Model<IClient> = mongoose.model<IClient>('Client', ClientSchema);

export const getAll = () => ClientModel.find();
export const getById = (id: string) => ClientModel.findById(id);
export const create = (client: Partial<IClient>) => new ClientModel(client)
    .save().then((client) => client.toObject());
export const deleteById = (id: string) => ClientModel.findOneAndDelete({ _id: id});
export const updateById = (id: string, values: Partial<IClient>) => ClientModel.findByIdAndUpdate(id, values);