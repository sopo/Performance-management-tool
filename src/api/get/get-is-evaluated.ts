import { supabase } from "@/supabase";

export const getIsEvaluated = async (id: string): Promise<boolean> => {
 
  const { data,  } = await supabase
    .from('answers')
    .select('id, is_evaluated')
    .eq('id', id)  
    .single();  

  return data?.is_evaluated ?? false;  
};
