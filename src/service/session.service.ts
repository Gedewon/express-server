import config from "config";
import { sign } from "crypto";
import { LeanDocument } from "mongoose";
import Session, { SessionDocument } from "../model/session.model";
import { UserDocument } from "../model/user.model";

export async function createSession(userId: string ,userAgent:string){
     const session = await Session.create({user:userId,userAgent:userAgent})
    return session.toJSON();
}

export function createAccessToken({
    user,
    session
}:{
    user:
    | Omit<UserDocument,"password">
    | LeanDocument<Omit<UserDocument,"password">>,
    session:
    | Omit<SessionDocument,"password">
    | LeanDocument<Omit<SessionDocument,"password">>,
      
}){
    // build and return the new access token 
    const accessToken = sign(
        {...user,session:session._id},
        {expiresIn: config.get("accessTokenTtl")} //make it about 15 minutes 
    );

    return accessToken;

}