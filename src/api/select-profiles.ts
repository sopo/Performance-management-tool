import { supabase } from "@/supabase";
import { Peers } from "@/types/types";

export const PostProfiles = async(payload: Peers[]) => {
    await supabase
    .from('selected_peers')
    .insert(payload)
    .select()

}

