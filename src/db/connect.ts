import mongoose from "mongoose";
import _default from "../../config/default";
import log from "../logger";

export default function connect() {
  const { dbUri } = _default;

  return mongoose
    .connect(dbUri, {})
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
    });
}
