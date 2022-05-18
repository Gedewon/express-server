import mongoose from "mongoose";
import bcrypt from "bcrypt";
import _default from "../../config/default";

export interface UserDocument extends mongoose.Document {
  email: String;
  name: String;
  password: String;
  createdAt: Date;
  updateAt: Date;
  comparePassword(candidatePassword: String): Promise<boolean>;
}

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },

    name: { type: String, required: true },

    password: { type: String, required: true },
  },
  { timestamps: true }
);

// use presave hook for model which is cool to hash at flaye  
UserSchema.pre("save",async function(next){
    let user = this as UserDocument;
    // only hash the password if it's hass been modified (or is new)
    if(!user.isModified("password")) return next();


    // Random additional data 
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hashSync(user.password as string,salt);

    // Replace user password with hased one 
     user.password = hash;

    return next();
})

UserSchema.methods.comparePassword = async function (candidatePassword : string){
    const user = this as UserDocument;
    return bcrypt.compare(candidatePassword,user.password as string).catch((e)=>false);
}

const User = mongoose.model<UserDocument>("User", UserSchema);
export default User;
