import log from "../logger";
import { Request,Response } from "express";

export async function createUserSessionHandler(req: Request, res: Response) {
    
    /**
     * 1.validate the email and password 
     * 2.create a session 
     * 3.create acess token
     * 4.creaet refersh token 
     * 5.send refersh and access token back
     */
    try {
    } catch (error) {
      log.error(error);
      return res.status(409).send(error);
    }

    



  }
  