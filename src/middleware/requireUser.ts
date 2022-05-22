import { Response, Request, NextFunction } from "express"
import { get } from "lodash";

export default  async (req:Request, res:Response , next:NextFunction) => {
    const user = get(req,"user");
     console.log(user);
    if(!user) return res.sendStatus(403);

    return next();
}