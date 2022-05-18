import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateRequest from './middleware/validateRequest'
export default (app: Express) => {
  app.get("/helthcheck", (req: Request, res: Response) => {
    res.status(200).send("working  correctly");
  });

  //create a user
  app.post("/api/user",validateRequest(createuserSchema),createUserHandler);
};
