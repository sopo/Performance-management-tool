import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useDeleteUser } from "@/hooks/use-delete-user";
import { Peer } from "@/types/types";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { ROOT_PATHS } from "../../root.enums";

interface PeerListItemProps {
  peer: Peer;
}
const MyEvaluatorsListItem: React.FC<PeerListItemProps> = ({ peer }) => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { mutate: deleteUser, isSuccess } = useDeleteUser();

  const peerIdToDelete = peer?.id || 0;
  const handleDelete = (id: number | undefined) => {
    if (!id) {
      console.error("Invalid peer ID.");
      return;
    }

    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(`/${lang}/${ROOT_PATHS.MY_EVALUATORS}`);
    }
  }, [isSuccess, navigate, lang]);
  return (
    <div className="border-b border-border py-6 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarFallback>
            <p className="text-small text-foreground">
              {lang === "en"
                ? peer.peer_display_name_en?.[0]
                : peer.peer_display_name_ka?.[0]}
            </p>
          </AvatarFallback>
        </Avatar>
        <div className="flex gap-2">
          <p>
            {lang === "en"
              ? peer.peer_display_name_en
              : peer.peer_display_name_ka}
          </p>
          <p className="text-muted-foreground">•</p>
          <p className="text-muted-foreground">
            {lang === "en" ? peer.peer_position_en : peer.peer_position_ka}
          </p>
        </div>
      </div>
      <Trash2
        className="text-muted-foreground w-6 h-6 hover:cursor-pointer"
        onClick={() => handleDelete(peerIdToDelete)}
      />
    </div>
  );
};
export default MyEvaluatorsListItem;
