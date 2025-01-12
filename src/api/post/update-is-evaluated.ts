import { supabase } from "@/supabase";

export const updateIsEvaluated = async (variables: { userId: string; peerId: string; isEvaluated: boolean }): Promise<{ data: any[] | null }> => {
  const { userId, peerId, isEvaluated } = variables;


  const { data } = await supabase
    .from('selected_peers')
    .update({ is_evaluated: isEvaluated }) 
    .eq('user_id', userId)  
    .eq('peer_id', peerId)  
    .select(); 


  return { data };  
};

