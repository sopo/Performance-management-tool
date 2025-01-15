import { z } from "zod";

export const signInShema = z.object({
  email: z
    .string()
    .min(1, { message: "required" })
    .email({ message: "envalidEmail" }),

  password: z
    .string()
    .min(1, { message: "required" })
    .min(6, { message: "smallPassword" }),
});

export type SignInForm = z.infer<typeof signInShema>;
