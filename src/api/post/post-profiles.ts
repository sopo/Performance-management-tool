import { supabase } from "@/supabase";
import { PeerInsert } from "@/types/types";

export const PostProfiles = async (payload: PeerInsert[]) => {
  await supabase.from("selected_peers").insert(payload).select();
};
