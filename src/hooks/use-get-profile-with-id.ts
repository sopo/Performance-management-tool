import { QUERY_KEYS } from "./enums";
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { Database } from "@/supabase/database.types";
import { getProfileWithId } from "@/api/get-profiles";

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];

const useGetProfiles = <T = Profile>({
  id,
  queryOptions,
  isSuccess
}: {
  id: string;
  isSuccess?: (data: Profile | null) => void;
  queryOptions?: Omit<
    UseQueryOptions<Profile | null, Error, T>,
    "queryKey" | "queryFn"
  >;
}): UseQueryResult<T, Error> => {
  return useQuery<Profile | null, Error, T>({
    queryKey: [QUERY_KEYS.PROFILES, id],
    queryFn: async () => {
      const result = await getProfileWithId(id);
      return result.data?.[0] || null;
    },
   ...isSuccess,
    ...queryOptions,
  });
};

export default useGetProfiles;
