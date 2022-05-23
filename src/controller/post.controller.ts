import { Response, Request } from "express";
import { get } from "lodash";
import { createPost } from "../service/post.service";

export const createPostHandler = async (req: Request, res: Response) => {
  const userId = get(req, "user._id");
  const body = req.body;
  const post = await createPost({ ...body, user: userId });
  return res.status(202).send(post);
};
