import { QUERY_KEYS } from "./enums";
import { useQuery } from "@tanstack/react-query";
import { getSession } from "@/api/get/get-session";

const useGetUserSession = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER_SESSION],
    queryFn: async () => {
      return await getSession();
    },
  });
};
export default useGetUserSession;
