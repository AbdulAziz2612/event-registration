import mongoose, { Schema, Document } from 'mongoose';

export interface EventRegistrationModel extends Document {
    registrationId: string;
    fullName: string;
    mobile: string;
    email: string;
    uploadIdCard: string;
    registrationType: string;
    noOfTickets: number;
    registrationDate: Date;
}

export const EventRegistrationSchema: Schema = new Schema({
    registrationId: { type: mongoose.Types.ObjectId, required: false },
    fullName: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    uploadIdCard: { type: String, required: true },
    registrationType: { type: String, required: true },
    noOfTickets: { type: Number, required: true },
    registrationDate: { type: Date, default: Date.now }
});

export default mongoose.model<EventRegistrationModel>('EventRegistration', EventRegistrationSchema);
