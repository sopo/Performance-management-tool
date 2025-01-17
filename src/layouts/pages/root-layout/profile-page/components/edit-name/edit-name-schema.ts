import { z } from "zod";

export const EditNameShema = z.object({
  userNameEn: z
    .string()
    .min(1, { message: "required" }),
  userNameKa: z
    .string()
    .min(1, { message: "required" })
});

export type EditNameForm = z.infer<typeof EditNameShema>;
