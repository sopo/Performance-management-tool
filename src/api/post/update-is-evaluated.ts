import { supabase } from "@/supabase";
import { Peer } from "@/types/types";

export const updateIsEvaluated = async (variables: {
  userId: string;
  peerId: string;
  isEvaluated: boolean;
}): Promise<{ data: Peer[] | null }> => {
  const { userId, peerId, isEvaluated } = variables;

  const { data } = await supabase
    .from("selected_peers")
    .update({ is_evaluated: isEvaluated })
    .eq("user_id", userId)
    .eq("peer_id", peerId)
    .select();

  return { data };
};
