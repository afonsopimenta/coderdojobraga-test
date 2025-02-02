import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email é necessário" })
    .email({ message: "Email inválido" }),
  password: z.string().min(1, { message: "Password é necessária" }),
});

export type SignInSchema = z.infer<typeof signInSchema>;
