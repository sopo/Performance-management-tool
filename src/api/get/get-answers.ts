import { supabase } from "@/supabase";

export const getAnswers = async (id: string) => {
  const { data } = await supabase.from("answers").select("*").eq("user_id", id);
  return data;
};
