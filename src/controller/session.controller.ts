import log from "../logger";
import { Request, Response } from "express";
import { updateSession, validatePassword } from "../service/user.service";
import { createAccessToken, createSession } from "../service/session.service";
import config from "config";
import { sign } from "../util/jwt.utils";
import { get } from "lodash";
export async function createUserSessionHandler(req: Request, res: Response) {
  /**
   * 1.validate the email and password
   * 2.create a session
   * 3.create acess token
   * 4.creaet refersh token
   * 5.send refersh and access token back
   */
  const user = await validatePassword(req.body);

  if (!user) return res.status(401).send("Invalid username or password");

  //  now we can create a session
  const session = await createSession(user._id, req.get("user-agent") || "");

  // create acess token
  const accessToken = createAccessToken({ user, session });

  //  creat a refresh token
  const refreshToken = sign(session, {
    expiresIn: config.get("refershTokenTtl"),
  }); //1 yr

  res.status(200).send({ accessToken, refreshToken });
}

export const  invalidateUserSessionHandler = async (req:Request ,res:Response) => {
  const sessionId = get(req,"user.session");
  await updateSession({_id: sessionId},{valid: false});
  return res.sendStatus(200);
}