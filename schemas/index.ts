import { object, string } from "zod";

export const LoginSchema = object({
  email: string().email(),
  password: string().min(1, "Password is required"),
});

export const RegisterSchema = object({
  email: string().email(),
  password: string().min(6, "Minimum password length is 6"),
  name: string().min(1, "Name is required"),
});
