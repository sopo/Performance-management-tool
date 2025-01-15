import { QUERY_KEYS } from "./enums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAvailablePeersProfiles } from "@/api/get/get-profiles";
import { Profile } from "@/types/types";

const useGetAvailablePeersProfiles = <T = Profile[]>({
  id,
  page,
}: {
  id: string;
  page: number;
}): UseQueryResult<T, Error> => {
  return useQuery<Profile[] | null, Error, T>({
    queryKey: [QUERY_KEYS.PEERS_PROFILES, id, page],
    queryFn: async () => {
      const allProfiles = await getAvailablePeersProfiles(id, page);
      return allProfiles;
    },
  });
};

export default useGetAvailablePeersProfiles;
