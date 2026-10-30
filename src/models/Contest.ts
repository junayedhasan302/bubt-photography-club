import mongoose, { Schema, Document, Model } from "mongoose";

export type ContestStatus =
  | "draft"
  | "upcoming"
  | "registration_open"
  | "submission_open"
  | "submission_closed"
  | "judging"
  | "results_published"
  | "archived";

export interface IJudgingCriterion {
  name: string; // e.g. "Creativity", "Technical Quality", "Composition", "Storytelling", "Relevance to Theme"
  maxScore: number; // e.g. 10
  weight?: number; // e.g. 1
}

export interface IPrize {
  rank: number;
  title: string;
  reward: string;
}

export interface IDynamicField {
  key: string;
  label: string;
  type: "text" | "textarea" | "select" | "checkbox";
  required: boolean;
  options?: string[];
}

export interface IContest extends Document {
  title: string;
  slug: string;
  theme: string;
  category: string;
  description: string;
  coverImage?: string;
  status: ContestStatus;
  rules: string[];
  eligibility: string;
  submissionStart: Date;
  submissionDeadline: Date;
  maxPhotos: number;
  allowedFormats: string[];
  maxFileSizeMb: number;
  dynamicFields: IDynamicField[];
  judgingCriteria: IJudgingCriterion[];
  blindJudging: boolean;
  prizes: IPrize[];
  assignedJudges: string[]; // User IDs
  createdAt: Date;
  updatedAt: Date;
}

const ContestSchema = new Schema<IContest>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    theme: { type: String, required: true, trim: true },
    category: { type: String, default: "Photography Competition", trim: true },
    description: { type: String, required: true },
    coverImage: { type: String, default: "" },
    status: {
      type: String,
      enum: [
        "draft",
        "upcoming",
        "registration_open",
        "submission_open",
        "submission_closed",
        "judging",
        "results_published",
        "archived",
      ],
      default: "upcoming",
      index: true,
    },
    rules: [{ type: String }],
    eligibility: { type: String, default: "Open to all verified BUBT students and photography enthusiasts" },
    submissionStart: { type: Date, required: true },
    submissionDeadline: { type: Date, required: true },
    maxPhotos: { type: Number, default: 3 },
    allowedFormats: [{ type: String, default: ["image/jpeg", "image/png"] }],
    maxFileSizeMb: { type: Number, default: 15 },
    dynamicFields: [
      {
        key: { type: String, required: true },
        label: { type: String, required: true },
        type: { type: String, enum: ["text", "textarea", "select", "checkbox"], default: "text" },
        required: { type: Boolean, default: false },
        options: [{ type: String }],
      },
    ],
    judgingCriteria: [
      {
        name: { type: String, required: true },
        maxScore: { type: Number, default: 10 },
        weight: { type: Number, default: 1 },
      },
    ],
    blindJudging: { type: Boolean, default: true },
    prizes: [
      {
        rank: { type: Number, required: true },
        title: { type: String, required: true },
        reward: { type: String, required: true },
      },
    ],
    assignedJudges: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

export const Contest: Model<IContest> =
  mongoose.models.Contest || mongoose.model<IContest>("Contest", ContestSchema);

