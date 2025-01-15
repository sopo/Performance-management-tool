import { supabase } from "@/supabase";
import { Answer } from "@/types/types";

export const PostAnswers = async (payload: Answer[]) => {
  await supabase.from("answers").insert(payload).select();
};
