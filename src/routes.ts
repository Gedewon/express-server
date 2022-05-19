import { Express, Request, Response } from "express";
import {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
} from "./controller/user.controller";
import { createUserSessionHandler } from "./controller/session.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema } from "./schema/user.schema";
import { createUserSessionSchema } from "./schema/session.schema";

export default (app: Express) => {
  app.get("/api/users", getUsersHandler);
  app.get("/api/users/:id", getUserHandler);

  //create a user
  app.post("/api/user", validateRequest(createUserSchema), createUserHandler);

  // Login
  app.post(
    "/api/sessions",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  );
};
