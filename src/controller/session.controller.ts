import log from "../logger";
import { Request,Response } from "express";
import { validatePassword } from "../service/user.service";
import { createSession } from "../service/session.service";

export async function createUserSessionHandler(req: Request, res: Response) {
    
    /**
     * 1.validate the email and password 
     * 2.create a session 
     * 3.create acess token
     * 4.creaet refersh token 
     * 5.send refersh and access token back
     */
    const user = await  validatePassword(req.body);

    if(!user) return res.status(401).send("Invalid username or password");
    
    //  now we can create a session 
     const session = await createSession(user._id, req.get("user-agent") || "");
    


  }
  