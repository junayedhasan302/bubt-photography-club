import mongoose, { Schema, Document, Model } from "mongoose";

export interface ICommitteeMember {
  _id?: string;
  name: string;
  position: string;
  department?: string;
  batch?: string;
  studentId?: string;
  photoUrl?: string;
  bio?: string;
  order: number;
  socialLinks?: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    portfolio?: string;
  };
}

export interface ICommittee extends Document {
  title: string; // e.g. "2026 Executive Committee"
  year: number; // e.g. 2026
  isCurrent: boolean;
  termStart?: string;
  termEnd?: string;
  description?: string;
  members: ICommitteeMember[];
  createdAt: Date;
  updatedAt: Date;
}

const CommitteeMemberSchema = new Schema<ICommitteeMember>({
  name: { type: String, required: true, trim: true },
  position: { type: String, required: true, trim: true },
  department: { type: String, trim: true },
  batch: { type: String, trim: true },
  studentId: { type: String, trim: true },
  photoUrl: { type: String, default: "" },
  bio: { type: String, trim: true },
  order: { type: Number, default: 0 },
  socialLinks: {
    linkedin: String,
    facebook: String,
    instagram: String,
    portfolio: String,
  },
});

const CommitteeSchema = new Schema<ICommittee>(
  {
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: true, index: true },
    isCurrent: { type: Boolean, default: false, index: true },
    termStart: String,
    termEnd: String,
    description: String,
    members: [CommitteeMemberSchema],
  },
  {
    timestamps: true,
  }
);

// Guarantee only one committee has isCurrent = true
CommitteeSchema.pre("save", async function (next) {
  if (this.isCurrent) {
    await mongoose.models.Committee.updateMany(
      { _id: { $ne: this._id } },
      { $set: { isCurrent: false } }
    );
  }
  next();
});

export const Committee: Model<ICommittee> =
  mongoose.models.Committee || mongoose.model<ICommittee>("Committee", CommitteeSchema);

