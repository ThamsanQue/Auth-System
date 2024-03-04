import { object, string } from "zod";

export const LoginSchema = object({
  email: string().email(),
  password: string().min(1, "Password is required"),
});
