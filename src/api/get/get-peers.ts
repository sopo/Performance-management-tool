import { supabase } from "@/supabase";

export const getMyPeers = async (id: string) => {
  const {data} = await supabase.from("selected_peers").select("*").eq("user_id", id)
  return data
};

export const getPeersToEvaluate = async (id: string) => {
  const {data} = await supabase.from("selected_peers").select("*").eq("peer_id", id)
  return data
};
