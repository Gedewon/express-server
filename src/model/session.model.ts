import mongoose from "mongoose";
import bcrypt from "bcrypt";
import _default from "../../config/default";
import { UserDocument } from "./user.model";

export interface SessionDocument extends mongoose.Document {
  user: UserDocument["_id"]; // user serializer kind of value to store in session
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updatedAt: Date;
}

const SessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    valid: { type: Boolean, default: true },

    userAgent: { type: String },
  },
  { timestamps: true }
);

const Session = mongoose.model<SessionDocument>("Session", SessionSchema);
export default Session;
