import { QUERY_KEYS } from "./enums";
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { getProfiles } from "@/api/get/get-profiles";
import { Database } from "@/supabase/database.types";
export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
const useGetProfiles = <T = Profile[]>({
  queryOptions,
}: {
  queryOptions?: Omit<
    UseQueryOptions<Profile[], Error, T>,
    "queryKey" | "queryFn"
  >;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<Profile[], Error, T>({
    queryKey: [QUERY_KEYS.PROFILES],
    queryFn: async () => {
      const result = await getProfiles();
      return result.data || [];
    },
    ...queryOptions,
  });
};
export default useGetProfiles;
