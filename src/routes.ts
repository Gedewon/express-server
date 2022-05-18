import { Express, Request, Response } from "express";

export default (app: Express) => {
  app.get("/helthcheck", (req: Request, res: Response) => {
    res.status(200).send("working  correctly");
  });

  //create a user
  app.post("/user");
};
