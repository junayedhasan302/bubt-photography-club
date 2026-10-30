import mongoose, { Schema, Document, Model } from "mongoose";

export type UserRole =
  | "super_admin"
  | "admin"
  | "content_manager"
  | "contest_manager"
  | "judge"
  | "member"
  | "participant";

export interface IUser extends Document {
  email: string;
  name: string;
  passwordHash?: string;
  role: UserRole;
  isOwner?: boolean;
  avatar?: string;
  department?: string;
  studentId?: string;
  batch?: string;
  phone?: string;
  bio?: string;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    portfolio?: string;
  };
  emailVerified: boolean;
  verificationToken?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      enum: [
        "super_admin",
        "admin",
        "content_manager",
        "contest_manager",
        "judge",
        "member",
        "participant",
      ],
      default: "participant",
      index: true,
    },
    isOwner: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    department: {
      type: String,
      trim: true,
    },
    studentId: {
      type: String,
      trim: true,
    },
    batch: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    bio: {
      type: String,
      trim: true,
    },
    socialLinks: {
      linkedin: String,
      facebook: String,
      instagram: String,
      portfolio: String,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    verificationToken: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);

export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

