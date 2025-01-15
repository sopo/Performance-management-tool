import { getSelectedPeersStatus } from "@/api/get/get-peers";
import { QUERY_KEYS } from "./enums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

const useGetSelectedPeersStatus = ({
  userId,
  peerId,
}: {
  userId: string;
  peerId: string;
}): UseQueryResult<boolean | null, Error> => {
  return useQuery<boolean | null, Error>({
    queryKey: [QUERY_KEYS.SELECTED_PEER_STATUS, userId, peerId],
    queryFn: async () => {
      const result = await getSelectedPeersStatus(userId, peerId);
      return result;
    },
  });
};

export default useGetSelectedPeersStatus;
