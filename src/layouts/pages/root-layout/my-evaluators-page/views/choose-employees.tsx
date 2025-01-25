import ChooseEmployeesListItem from "../components/choose-employees-list-item";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Peer, PeerInsert, Profile } from "@/types/types";
import { usePostProfiles } from "@/hooks/use-post-profile";
import { Button } from "@/components/ui/button";
import { ProfileAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { mapPeerData } from "@/utils/map-users-list";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import { ROOT_PATHS } from "../../root.enums";
import useGetAvailablePeersProfiles from "@/hooks/use-get-available-peers-profiles";
import { PEERS_LIMIT } from "@/api/get/get-peers";
import useGetAvailablePeersProfilesCount from "@/hooks/use-get-available-peers-profiles-count";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import useGetMyPeers from "@/hooks/use-get-my-peers";
import Text from "@/components/text/text";
import SearchBar from "../components/search-bar";
import qs from "qs";
import { SkeletonList } from "@/components/ui/skeleton-list";
const ChooseEmployees: React.FC = () => {
  const user = useAtomValue(ProfileAtom);
  const { t } = useTranslation();
  const userId = user?.user_id || "";
  const { hash } = useLocation();
  const page = hash !== "" ? parseInt(hash.replace("#", "")) : 0;
  const [searchParams] = useSearchParams();

  const parsedQueryParams = qs.parse(searchParams.toString());
  const searchQuery =
    typeof parsedQueryParams.search === "string"
      ? parsedQueryParams.search
      : "";

  const { data, isLoading: allPeersLoading } = useGetAvailablePeersProfiles({
    id: userId,
    page,
    searchQuery,
  });

  const { data: chosenPeers, isLoading: chosenPeersLoading } = useGetMyPeers({
    id: userId,
  });
  const [matchedPeers, setMatchedPeers] = useState<Peer[]>([]);
  const [selectedProfiles, setSelectedProfiles] = useState<PeerInsert[]>([]);
  const { mutate, isSuccess } = usePostProfiles();
  const { lang } = useParams();
  const navigate = useNavigate();
  const { data: count } = useGetAvailablePeersProfilesCount({
    id: userId,
    searchQuery,
  });

  useEffect(() => {
    if (data && chosenPeers) {
      const matched = chosenPeers.filter((peer) =>
        data.some((profile) => profile.user_id === peer.peer_id),
      );
      setMatchedPeers(matched);
    }
  }, [data, chosenPeers]);

  useEffect(() => {
    if (isSuccess) {
      navigate(`/${lang}/${ROOT_PATHS.MY_EVALUATORS}`);
    }
  }, [isSuccess, lang, navigate]);
  if (count === undefined) {
    return <p>{t("global.noPeersAvailable")}</p>;
  }
  const pageCount = Math.ceil(count / PEERS_LIMIT);
  const pages = new Array(pageCount).fill(0);

  const handleSelect = (profile: PeerInsert) => {
    setSelectedProfiles((prev) => {
      if (!prev.some((p) => p.id === profile.id)) {
        return [...prev, profile];
      }
      return prev;
    });
  };

  const onSubmit = () => {
    const payload = mapPeerData(user as Profile, selectedProfiles as Profile[]);
    mutate(payload);
  };
  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.chooseEvaluators.title")}</Text>
      <SearchBar />
      {chosenPeersLoading || (allPeersLoading && <SkeletonList />)}
      <div>
        {data?.map((user) => {
          const isMatched = matchedPeers.some(
            (matchedPeer) => matchedPeer.peer_id === user.user_id,
          );

          return (
            <ChooseEmployeesListItem
              user={user}
              onChange={handleSelect}
              key={user.id}
              disabled={isMatched}
            />
          );
        })}
      </div>
      <Button onClick={onSubmit}>{t("pages.chooseEvaluators.title")}</Button>
      <div>
        <Pagination>
          <PaginationContent>
            {pages.map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink isActive={index === page} href={`#${index}`}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};
export default ChooseEmployees;
