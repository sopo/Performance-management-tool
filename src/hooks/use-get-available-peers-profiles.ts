import { QUERY_KEYS } from "./enums";
import {  UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAvailablePeersProfiles } from "@/api/get/get-profiles";
import { Profile } from "@/types/types";

const useGetAvailablePeersProfiles = <T = Profile[]>({
  id,
  page,
  searchQuery
}: {
  id: string;
  page: number;
  searchQuery: string;

}): UseQueryResult<T, Error> => {
  return useQuery<Profile[], Error, T>({
    queryKey: [QUERY_KEYS.PEERS_PROFILES, id, page, searchQuery],
    queryFn: async () => {
      const allProfiles = await getAvailablePeersProfiles(id, page, searchQuery);
      return allProfiles || [];
    },
  });
};

export default useGetAvailablePeersProfiles;
