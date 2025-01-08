import { supabase } from "@/supabase";

export const getProfiles = async () => {
  return await supabase
    .from("profiles")
    .select("*")
    .throwOnError();
};

export const getProfileWithId = async (id: string ) => {
  return await supabase
  .from("profiles")
  .select("*")
  .eq("user_id", id)
  .throwOnError()
}