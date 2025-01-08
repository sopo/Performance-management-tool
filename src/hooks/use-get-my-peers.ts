import { QUERY_KEYS } from "./enums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { Peers } from "@/types/types";
import { getMyPeers } from "@/api/get-peers";

const useGetMyPeers = <T = Peers[]>({
  id,
}: {
  id: string;
}): UseQueryResult<T, Error> => {
  return useQuery<Peers[], Error, T>({
    queryKey: [QUERY_KEYS.PEERS, id],
    queryFn: async () => {
      const result = await getMyPeers(id);
      return result || [];
    },
  });
};

export default useGetMyPeers;
