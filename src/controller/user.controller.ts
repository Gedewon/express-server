import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";
import { createUser } from "../service/user.service";

export async function createUserHandler(req:Request,res:Response){
    try{
      const user = await createUser(req.body);
      return res.status(200).send(omit(user.toJSON(),"password"));
    }catch(error){
        log.error(error);
      return res.status(409).send(error);

    }

}