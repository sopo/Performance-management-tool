import { supabase } from "@/supabase";

export const getSession = () => {
  return supabase.auth.getSession().then(({ data: { session } }) => {
    return session;
  });
};
