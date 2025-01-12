import { supabase } from "@/supabase";
import { Peer } from "@/types/types";

export const PostProfiles = async(payload: Peer[]) => {
    await supabase
    .from('selected_peers')
    .insert(payload)
    .select()

}

