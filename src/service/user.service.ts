import { Request, Response } from "express";
import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../model/user.model";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    return await User.create(input);
  } catch (error) {
    throw new Error(error as string);
  }
}
