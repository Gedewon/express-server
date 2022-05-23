import { object, string, ref } from "yup";

export const createUserSessionSchema = object({
  body: object({
    password: string()
      .required("password is required")
      .min(6, "password is too short-should be 6 chars minimum.")
      .matches(/^[a-zA-Z0-9_.-]*$/, "password con only contain latin letters"),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
});


