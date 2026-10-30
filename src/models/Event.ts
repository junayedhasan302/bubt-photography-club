import mongoose, { Schema, Document, Model } from "mongoose";

export type EventStatus = "upcoming" | "ongoing" | "completed";

export interface IEvent extends Document {
  title: string;
  category: string;
  description: string;
  date: string;
  time: string;
  location: string;
  status: EventStatus;
  coverImage?: string;
  registrationOpen: boolean;
  registrationDeadline?: string;
  registrationLink?: string;
  galleryPhotos?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed"],
      default: "upcoming",
      index: true,
    },
    coverImage: { type: String, default: "" },
    registrationOpen: { type: Boolean, default: false },
    registrationDeadline: { type: String },
    registrationLink: { type: String },
    galleryPhotos: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const ClubEvent: Model<IEvent> =
  mongoose.models.ClubEvent || mongoose.model<IEvent>("ClubEvent", EventSchema);

