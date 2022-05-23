import { Response, Request, NextFunction } from "express";
import { get } from "lodash";

export default async (req: Request, res: Response, next: NextFunction) => {
  const user = get(req, "user");

  //? check if the user is in  login status  else return forbidden operation
  if (!user) return res.sendStatus(403);

  return next();
};
