import { Request, Response, NextFunction } from "express";
import { get } from "lodash";
import { createAccessToken } from "../service/session.service";

export default  async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = get(req, "headers.authorization", "").replace(
    /^Bearer\s/,
    ""
  );

  const refershToken = get(req, "headers.x-refersh");

  if (!createAccessToken) return next();

  const { decode, expired } = decode(accessToken);

  /**
   * check and see if user is in that 15m ttl window and append
   */
  if (decode) {
    // @ts-ignore
    req.user = decode;

    return next();
  }

  /** 
   check if accessToken is expired and refersh token is there
   then issue new one
   */

  if (expired && refershToken) {
    const newAccessToken = await reIssueToken({ refershToken });

    if (newAccessToken) {
      //   Add the new access token to the response header
      res.setHeader("x-access-token", newAccessToken);

      const { decoded } = decode(newAccessToken);

      // @ts-ignore
      req.user = decode;
      return nex();
    }
    return next();
  }
};
