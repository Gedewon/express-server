import { Express, Request, Response } from "express";
import {
  createUserHandler,
} from "./controller/user.controller";
import {createUserSessionHandler} from "./controller/session.controller";
import validateRequest from "./middleware/validateRequest";
import {
  createUserSchema,
} from "./schema/user.schema";
import {createUserSessionSchema} from "./schema/session.schema";

export default (app: Express) => {
  app.get("/helthcheck", (req: Request, res: Response) => {
    res.status(200).send("working  correctly");
  });

  //create a user
  app.post("/api/user", validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );
};
