import config from "config";
import { get } from "lodash";
import { FilterQuery, LeanDocument } from "mongoose";
import Session, { SessionDocument } from "../model/session.model";
import { UserDocument } from "../model/user.model";
import { decode, sign } from "../util/jwt.utils";
import { findUser } from "./user.service";

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({ user: userId, userAgent: userAgent });
  return session.toJSON();
}

export function createAccessToken({
  user,
  session,
}: {
  user: any;
  session: any;
}) {
  // build and return the new access token
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") } //make it about 15 minutes
  );

  return accessToken;
}

export async function reIssueToken(refershToken: string) {
  /**
   * 1.Decode the refresh token
   * 2.Get the session
   * 3.Make sure the session is till valid
   */
  const { decoded } = decode(refershToken);
  if (!decoded || !get(decoded, "_id")) return false;

  const session = await Session.findById(get(decoded, "_id"));

  if (!session || !session?.valid) return false;

  const user = await findUser({ _id: session.user });

  if (!user) return false;

  const accessToken = createAccessToken({ user, session });

  return accessToken;
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return Session.findOne(query).lean();
}
