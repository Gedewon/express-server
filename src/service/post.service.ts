import {
  DocumentDefinition,
  FilterQuery,
  UpdateQuery,
  QueryOptions,
} from "mongoose";
import Post, { PostDocument } from "../model/post.model";

export function createPost(input: DocumentDefinition<PostDocument>) {
  return Post.create(input);
}
