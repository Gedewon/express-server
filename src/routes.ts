import { Express, Request, Response } from "express";
import {
  createUserHandler,
  getUserHandler,
  getUsersHandler,
} from "./controller/user.controller";
import {
  createUserSessionHandler,
  getUserSessionsHandler,
  invalidateUserSessionHandler,
} from "./controller/session.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema } from "./schema/user.schema";
import { createUserSessionSchema } from "./schema/session.schema";
import requireUser from "./middleware/requireUser";
import { createPostSchema } from "./schema/post.schema";
import {
  createPostHandler,
  updatePostHandler,
  getPostHandler,
  deletePostHandler,
} from "./controller/post.controller";

export default (app: Express) => {
  app.get("/healthcheck", (req: Request, res: Response) => {
    res.status(200).send({ message: "Server up and running " });
  });
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

  // Get the user's sessions

  app.get("/api/sessions", requireUser, getUserSessionsHandler);

  // Logout rout
  app.delete("/api/sessions", requireUser, invalidateUserSessionHandler);

  //- TODO - create a post
  app.post(
    "/api/posts",
    [requireUser, validateRequest(createPostSchema)],
    createPostHandler
  );

  //- TODO - UPDATE A POST
  app.put(
    "/api/posts/:postId",
    [requireUser, validateRequest(createPostSchema)],
    updatePostHandler
  );

  //- TODO - GET A POST
  app.get("/api/posts/:postId", getPostHandler);

  //TODO - DELETE A POST
  app.delete(
    "/api/posts/:postId",
    [requireUser, validateRequest(createPostSchema)],
    deletePostHandler
  );
};
