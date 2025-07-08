import mongoose, { Document, Schema } from 'mongoose';

export interface IUrl extends Document {
  originalUrl: string;
  shortCode: string;
  createdAt: Date;
}

const UrlSchema = new Schema<IUrl>({
  originalUrl: { type: String, required: true },
  shortCode: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

export const UrlModel = mongoose.model<IUrl>('Url', UrlSchema);


