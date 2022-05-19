import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";
import User from "../model/user.model";
import { createUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.status(200).send(omit(user.toJSON(), "password"));
  } catch (error) {
    log.error(error);
    return res.status(409).send(error);
  }
}

export async function getUsersHandler(req: Request, res: Response) {
  try {
    const user = await User.find();
    return res.status(200).send(user );
  } catch (error) {
    return res.status(404).send({ message: error });
  }
}

export async function getUserHandler(req: Request, res: Response) {
  try {
    const user = await User.find({_id:req.params.id});
    return res.status(200).send(user );
  } catch (error) {
    return res.status(404).send({ message: "no user under this id" });
  }
}


