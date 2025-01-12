import { QUERY_KEYS } from "./enums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Peer } from "@/types/types";
import { getMyPeers } from "@/api/get/get-peers";

const useGetMyPeers = <T = Peer[]>({
  id,
}: {
  id: string;
}): UseQueryResult<T, Error> => {
  return useQuery<Peer[], Error, T>({
    queryKey: [QUERY_KEYS.PEERS, id],
    queryFn: async () => {
      const result = await getMyPeers(id);
      return result || [];
    },
  });
};

export default useGetMyPeers;
