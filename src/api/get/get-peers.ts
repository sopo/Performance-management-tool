import { supabase } from "@/supabase";
export const PEERS_LIMIT = 2;

export const getMyPeers = async (id: string) => {
  const { data } = await supabase
    .from("selected_peers")
    .select("*")
    .eq("user_id", id);
  return data;
};

export const getPeersToEvaluate = async (id: string) => {
  const { data } = await supabase
    .from("selected_peers")
    .select("*")
    .eq("peer_id", id);
  return data;
};
export const getPeersToEvaluateWithPagination = async (
  id: string,
  page: number,
) => {
  const from = page * PEERS_LIMIT;
const to = from + PEERS_LIMIT - 1;
  const { data } = await supabase
    .from("selected_peers")
    .select("*")
    .eq("peer_id", id)
    .range(from, to)
    .order("id");
  return data;
};
export const getSelectedPeersStatus = async (
  userId: string,
  peerId: string,
) => {
  const { data } = await supabase
    .from("selected_peers")
    .select("is_evaluated")
    .eq("user_id", userId)
    .eq("peer_id", peerId);

  return data?.[0]?.is_evaluated ?? null;
};

export const getPeersToEvaluateCount = async (id: string) => {
  const { count } = await supabase
    .from("selected_peers")
    .select("*", { count: "exact" })
    .eq("peer_id", id);
  return count;
};
