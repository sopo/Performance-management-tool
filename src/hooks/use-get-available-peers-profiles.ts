import { QUERY_KEYS } from "./enums";
import {
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { getAvailablePeersProfiles, } from "@/api/get/get-profiles";
import { Profile } from "@/types/types";
import { getMyPeers } from "@/api/get/get-peers";


const useGetAvailablePeersProfiles = <T = Profile[]>({
  id,
  page
}: {
  id: string;
  page: number;


}): UseQueryResult<T, Error> => {
  return useQuery<Profile[] | null, Error, T>({
    queryKey: [QUERY_KEYS.PEERS_PROFILES, id, page],
    queryFn: async () => {
      const allProfiles = await getAvailablePeersProfiles(id, page);
      const allPeers = await getMyPeers(id)
      return allProfiles.filter((profile) => allPeers?.every(peer => peer.peer_id !== profile.user_id))

    },

  });
};

export default useGetAvailablePeersProfiles;
