import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { string } from "yup";
import { createAccessToken, reIssueToken } from "../service/session.service";
import {decode} from "../util/jwt.utils"
export default  async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('the comming request',req);
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );
  console.log('acessToken',accessToken);
  
  const refershToken = get(req, "headers.x-refersh");
  
  console.log('refershToken',refershToken);

  if (!createAccessToken) return next();

  const { decoded, expired } = decode(accessToken);

  /**
   * check and see if user is in that 15m ttl window and append
   */
  if (decoded) {
    // @ts-ignore
    req.user = decoded;

    return next();
  }

  /** 
   check if accessToken is expired and refersh token is there
   then issue new one
   */

  if (expired && refershToken) {
    const newAccessToken = await reIssueToken( refershToken );

    if (newAccessToken) {
      //   Add the new access token to the response header
      res.setHeader("x-access-token", newAccessToken);

      const { decoded } = decode(newAccessToken);

      // @ts-ignore
      req.user = decoded;
      return next();
    }
    return next();
  }
};
