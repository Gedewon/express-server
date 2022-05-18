import mongoose from "mongoose";
import bcrypt from "bcrypt";
import _default from "../../config/default";

export interface UserDocument extends mongoose.Document {
  email: String;
  name: String;
  password: String;
  createdAt: Date;
  updateAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },

    name: { type: String, required: true },

    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
