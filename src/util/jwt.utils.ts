import jwt from "jsonwebtoken";
import config from "config";
import { access } from "fs";
import log from "../logger";
import { object } from "yup";

const privateKey = config.get("privateKey") as string;

export function sign(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}

export function decode(accessToken: string) {
  try {
    const decoded = jwt.verify(accessToken, privateKey);

    return { valid: true, expired: false, decoded };
  } catch (error: any) {
    log.error(error);
    return {
      valid: false,
      expired: error.message === "jwt expired",
      decoded: null,
    };
  }
}

// const { decoded, expired } = decode(accessToken);
