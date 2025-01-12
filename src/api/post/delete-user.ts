import { supabase } from "@/supabase"

export const deleteUser = async(id: number): Promise<void> => {
   await supabase
  .from('selected_peers')
  .delete()
  .eq('id', id)
}

