import mongoose, { Schema, Document, Model } from "mongoose";

export type GalleryCategory =
  | "Nature & Landscape"
  | "Street & Human Stories"
  | "Portrait Photography"
  | "Events & Activities"
  | "Abstract & Night"
  | "Minimalist & Fine Art"
  | "Conceptual & Creative";

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Nature & Landscape",
  "Street & Human Stories",
  "Portrait Photography",
  "Events & Activities",
  "Abstract & Night",
  "Minimalist & Fine Art",
  "Conceptual & Creative",
];

export interface IGalleryPhoto extends Document {
  title: string;
  category: GalleryCategory;
  caption?: string;
  story?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  publicId?: string;
  photographerName: string;
  photographerDepartment?: string;
  cameraGear?: string;
  location?: string;
  albumId?: string;
  albumName?: string;
  isFeatured: boolean;
  order: number;
  tags?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const GalleryPhotoSchema = new Schema<IGalleryPhoto>(
  {
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: GALLERY_CATEGORIES,
      index: true,
    },
    caption: { type: String, trim: true },
    story: { type: String, trim: true },
    imageUrl: { type: String, required: true },
    thumbnailUrl: { type: String },
    publicId: { type: String },
    photographerName: { type: String, required: true, trim: true },
    photographerDepartment: { type: String, trim: true },
    cameraGear: { type: String, trim: true },
    location: { type: String, trim: true },
    albumId: { type: String, index: true },
    albumName: { type: String },
    isFeatured: { type: Boolean, default: false, index: true },
    order: { type: Number, default: 0 },
    tags: [{ type: String, trim: true }],
  },
  {
    timestamps: true,
  }
);

export const GalleryPhoto: Model<IGalleryPhoto> =
  mongoose.models.GalleryPhoto ||
  mongoose.model<IGalleryPhoto>("GalleryPhoto", GalleryPhotoSchema);

