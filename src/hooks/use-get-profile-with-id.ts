import { QUERY_KEYS } from "./enums";
import {
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { getProfileWithId } from "@/api/get/get-profiles";
import { Profile } from "@/types/types";


const useGetProfiles = <T = Profile>({
  id,
}: {
  id: string;


}): UseQueryResult<T, Error> => {
  return useQuery<Profile | null, Error, T>({
    queryKey: [QUERY_KEYS.PROFILES, id],
    queryFn: async () => {
      const result = await getProfileWithId(id);
      return result.data?.[0] || null;
    },

  });
};

export default useGetProfiles;
