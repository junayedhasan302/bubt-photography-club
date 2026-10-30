import mongoose, { Schema, Document, Model } from "mongoose";

export type SubmissionStatus =
  | "submitted"
  | "under_review"
  | "shortlisted"
  | "disqualified"
  | "awarded";

export interface ISubmissionPhoto {
  _id?: string;
  title: string;
  caption?: string;
  story?: string;
  previewUrl: string; // Public optimized URL for judging/display
  originalUrl: string; // Secure Cloudflare R2 / private storage URL
  cameraGear?: string;
  exifData?: {
    camera?: string;
    lens?: string;
    focalLength?: string;
    aperture?: string;
    shutterSpeed?: string;
    iso?: string;
  };
}

export interface IContestSubmission extends Document {
  contestId: mongoose.Types.ObjectId | string;
  userId: mongoose.Types.ObjectId | string;
  participantName: string;
  studentId?: string;
  department?: string;
  email: string;
  phone?: string;
  submissionCode: string; // e.g. BUBTPC-2026-X9Y2
  status: SubmissionStatus;
  photos: ISubmissionPhoto[];
  dynamicData?: Record<string, any>;
  averageScore?: number;
  totalEvaluations?: number;
  rank?: number;
  awardTitle?: string;
  feedbackNotes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const SubmissionPhotoSchema = new Schema<ISubmissionPhoto>({
  title: { type: String, required: true, trim: true },
  caption: { type: String, trim: true },
  story: { type: String, trim: true },
  previewUrl: { type: String, required: true },
  originalUrl: { type: String, required: true },
  cameraGear: { type: String, trim: true },
  exifData: {
    camera: String,
    lens: String,
    focalLength: String,
    aperture: String,
    shutterSpeed: String,
    iso: String,
  },
});

const ContestSubmissionSchema = new Schema<IContestSubmission>(
  {
    contestId: {
      type: Schema.Types.ObjectId,
      ref: "Contest",
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    participantName: { type: String, required: true, trim: true },
    studentId: { type: String, trim: true },
    department: { type: String, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, trim: true },
    submissionCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      index: true,
    },
    status: {
      type: String,
      enum: ["submitted", "under_review", "shortlisted", "disqualified", "awarded"],
      default: "submitted",
      index: true,
    },
    photos: {
      type: [SubmissionPhotoSchema],
      validate: [(val: any[]) => val.length > 0, "At least one photograph is required."],
    },
    dynamicData: { type: Schema.Types.Mixed },
    averageScore: { type: Number, default: 0 },
    totalEvaluations: { type: Number, default: 0 },
    rank: { type: Number },
    awardTitle: { type: String },
    feedbackNotes: { type: String },
  },
  {
    timestamps: true,
  }
);

// Enforce one submission per verified account per contest!
ContestSubmissionSchema.index({ contestId: 1, userId: 1 }, { unique: true });

export const ContestSubmission: Model<IContestSubmission> =
  mongoose.models.ContestSubmission ||
  mongoose.model<IContestSubmission>("ContestSubmission", ContestSubmissionSchema);

