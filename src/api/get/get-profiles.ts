import { supabase } from "@/supabase";
import { PEERS_LIMIT } from "./get-peers";

export const getProfileWithId = async (id: string) => {
  return await supabase
    .from("profiles")
    .select("*")
    .eq("user_id", id)
    .throwOnError();
};

export const getAvailablePeersProfiles = async (
  id: string,
  page: number,
  searchQuery: string,
) => {
  let request = supabase
    .from("profiles")
    .select("*")
    .neq("user_id", id)
    .range(page * PEERS_LIMIT, page * PEERS_LIMIT + PEERS_LIMIT);
  if (searchQuery) {
    request = request.or(
      `display_name_en.ilike.%${searchQuery}%,display_name_ka.ilike.%${searchQuery}%`,
    );
  }
  const { data } = await request;

  return data || [];
};

export const getAvailablePeersProfilesCount = async (
  id: string,
  searchQuery: string,
) => {
  let request = supabase
    .from("profiles")
    .select("*", { count: "exact" })
    .neq("user_id", id);
  if (searchQuery) {
    request = request.or(
      `display_name_en.ilike.%${searchQuery}%,display_name_ka.ilike.%${searchQuery}%`,
    );
  }
  const { count } = await request;
  return count;
};
