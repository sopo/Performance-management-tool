import { supabase } from "@/supabase";
import { PEERS_LIMIT } from "./get-peers";

export const getProfiles = async () => {
  return await supabase.from("profiles").select("*").throwOnError();
};

export const getProfileWithId = async (id: string) => {
  return await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", id)
    .throwOnError();
};

export const getAvailablePeersProfiles = async (id: string, page: number) => {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .neq("user_id", id)
    .range(page * PEERS_LIMIT, page * PEERS_LIMIT + PEERS_LIMIT);

  return data || [];
};

export const getAvailablePeersProfilesCount = async (id: string) => {
  const { count } = await supabase
    .from("profiles")
    .select("*", { count: "exact" })
    .neq("user_id", id);
  return count;
};
