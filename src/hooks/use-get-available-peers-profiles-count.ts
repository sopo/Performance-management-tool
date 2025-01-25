import { QUERY_KEYS } from "./enums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAvailablePeersProfilesCount } from "@/api/get/get-profiles";

const useGetAvailablePeersProfilesCount = ({
  id,
  searchQuery,
}: {
  id: string;
  searchQuery: string;
}): UseQueryResult<number> => {
  return useQuery<number>({
    queryKey: [QUERY_KEYS.PEERS_TO_EVALUATE_COUNT, id, searchQuery],
    queryFn: async () => {
      const result = await getAvailablePeersProfilesCount(id, searchQuery);
      return result || 0;
    },
  });
};

export default useGetAvailablePeersProfilesCount;
