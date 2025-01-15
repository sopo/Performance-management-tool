import ChooseEmployeesListItem from "../components/choose-employees-list-item";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Peer, PeerInsert, Profile } from "@/types/types";
import { usePostProfiles } from "@/hooks/use-post-profile";
import { Button } from "@/components/ui/button";
import { ProfileAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { mapPeerData } from "@/utils/map-users-list";
import { useLocation, useNavigate, useParams } from "react-router";
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

const ChooseEmployees: React.FC = () => {
  const user = useAtomValue(ProfileAtom);
  const { t } = useTranslation();
  const userId = user?.user_id || "";
  const { hash } = useLocation();
  const page = hash !== "" ? parseInt(hash.replace("#", "")) : 0;
  const { data, isLoading, isError } = useGetAvailablePeersProfiles({
    id: userId,
    page,
  });

  const { data: chosenPeers } = useGetMyPeers({ id: userId });
  const [matchedPeers, setMatchedPeers] = useState<Peer[]>([]);
  const [selectedProfiles, setSelectedProfiles] = useState<PeerInsert[]>([]);
  const { mutate, isSuccess } = usePostProfiles();
  const { lang } = useParams();
  const navigate = useNavigate();
  const { data: count } = useGetAvailablePeersProfilesCount({ id: userId });

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
    return <div>no peersavailable</div>;
  }
  const pageCount = Math.ceil(count / PEERS_LIMIT);
  const pages = new Array(pageCount).fill(0);

  if (isLoading) {
    return <div>{t("global.loading")}</div>;
  }
  if (isError) {
    return <div>error</div>;
  }

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
