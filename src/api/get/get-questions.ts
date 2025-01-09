import { supabase } from "@/supabase";
import { Questions } from "@/types/types";

export const getQuestions = async () => {
  try {
    const { data } = await supabase
      .from("questions")
      .select("*")
      .throwOnError();

    return data;
  } catch (err) {
    console.error("Error fetching questions:", err);
    return [] as Questions[];
  }
};
