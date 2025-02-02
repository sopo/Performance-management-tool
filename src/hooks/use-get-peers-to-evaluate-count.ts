import { QUERY_KEYS } from "./enums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getPeersToEvaluateCount } from "@/api/get/get-peers";

const useGetPeersToEvaluateCount = ({
  id,
}: {
  id: string;
}): UseQueryResult<number, Error> => {
  return useQuery<number>({
    queryKey: [QUERY_KEYS.PEERS_TO_EVALUATE_COUNT, id],
    queryFn: async () => {
      const result = await getPeersToEvaluateCount(id);
      return result || 0;
    },
  });
};

export default useGetPeersToEvaluateCount;
