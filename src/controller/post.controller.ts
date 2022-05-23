import { Response, Request } from "express";
import { get } from "lodash";
import { createPost, findPost, findAndUpdate } from "../service/post.service";

export const createPostHandler = async (req: Request, res: Response) => {
  const userId = get(req, "user._id");
  const body = req.body;
  const post = await createPost({ ...body, user: userId });
  return res.status(202).send(post);
};

export async function updatePostHandler(req: Request, res: Response) {
  const userId = get(req, "user._id");
  const postId = get(req, "params.postId");
  const update = req.body;

  const post = await findPost({ postId });

  // if there is no post send 404 post not found message
  if (!post) {
    return res.sendStatus(404);
  }

  if (String(post.user) !== userId) {
    return res.sendStatus(401);
  }

  const updatedPost = await findAndUpdate({ postId }, update, { new: true });

  return res.send(updatedPost);
}
