import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Peer } from "@/types/types";
import { useParams } from "react-router";
interface PeerListItemProps {
  peer: Peer;
}

const PeerListItem: React.FC<PeerListItemProps> = ({ peer }) => {
  const { lang } = useParams();
  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar className="hidden sm:block">
        <AvatarFallback>
          <p className="text-small text-foreground">
            {lang === "en"
              ? peer.peer_display_name_en?.[0]
              : peer.peer_display_name_ka?.[0]}
          </p>
        </AvatarFallback>
      </Avatar>
      <p>
        {lang === "en" ? peer.peer_display_name_en : peer.peer_display_name_ka}{" "}
        <span className="text-muted-foreground">•</span>{" "}
        <span className="text-muted-foreground">
          {lang === "en" ? peer.peer_position_en : peer.peer_position_ka}
        </span>
      </p>
    </div>
  );
};
export default PeerListItem;
