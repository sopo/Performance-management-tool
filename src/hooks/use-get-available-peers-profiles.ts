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
}: {
  id: string;


}): UseQueryResult<T, Error> => {
  return useQuery<Profile[] | null, Error, T>({
    queryKey: [QUERY_KEYS.PEERS_PROFILES, id],
    queryFn: async () => {
      const allProfiles = await getAvailablePeersProfiles(id);
      const allPeers = await getMyPeers(id)
      return allProfiles.filter((profile) => allPeers?.every(peer => peer.peer_id !== profile.user_id))

    },

  });
};

export default useGetAvailablePeersProfiles;
