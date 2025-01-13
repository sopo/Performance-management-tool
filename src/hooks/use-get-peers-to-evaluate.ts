import { QUERY_KEYS } from "./enums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Peer } from "@/types/types";
import { getPeersToEvaluate } from "@/api/get/get-peers";

const useGetPeersToEvaluate = <T = Peer[]>({
  id,
  page
}: {
  id: string;
  page: number;
}): UseQueryResult<T, Error> => {
  return useQuery<Peer[], Error, T>({
    queryKey: [QUERY_KEYS.PEERS_TO_EVALUATE, id, page],
    queryFn: async () => {
      const result = await getPeersToEvaluate(id, page);
      return result || [];
    },
  });
};

export default useGetPeersToEvaluate;
