import { supabase } from "@/supabase";

export const UpdateUserName = async ({
  id,
  payload,
}: {
  id: string;
  payload: { display_name_en?: string; display_name_ka?: string };
}) => {
  await supabase
    .from("profiles")
    .update({
      display_name_en: payload.display_name_en,
      display_name_ka: payload.display_name_ka,
    })
    .eq("user_id", id)
    .select();
};
