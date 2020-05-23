import mongoose, { Schema, Document } from 'mongoose';

export interface EventRegistrationTypeModel extends Document {
    registrationType: string;
    isActive: boolean;
}

export const EventRegistrationTypeSchema: Schema = new Schema({
    registrationType: { type: String, required: true, unique: true },
    isActive: { type: Boolean, required: true }
});

export default mongoose.model<EventRegistrationTypeModel>('EventRegistrationType', EventRegistrationTypeSchema);
