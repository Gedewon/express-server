import { object,string,ref } from "yup"

export const createUserSchema = object({
    body:object({
        name:string().required("Name is required"),
        password: string()
                    .required('password is required')
                    .min(6,"password is too short-should be 6 chars minimum.")
                    .matches(/^[a-zA-Z0-9_.-]*$/,"password con only contain latin letters"),
        passwordConfirmation: string().oneOf(
            [ref("password"),null],
            "password must match"
        ),
        email: string()
                .email("Must be a valid email")
                .required("Email is required"),
    }),
});