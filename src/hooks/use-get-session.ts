import { Session } from "@supabase/supabase-js";
import { QUERY_KEYS } from "./enums";
import { getSession } from "@/api/get/get-session";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

const useGetUserSession = (onSuccess: (data: Session | null) => void) => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_SESSION],
    queryFn: async (): Promise<Session | null> => {
      const session = await getSession();
      return session;
    },
    onSuccess: onSuccess,
  } as UseQueryOptions<Session | null, Error>);
};
export default useGetUserSession;
