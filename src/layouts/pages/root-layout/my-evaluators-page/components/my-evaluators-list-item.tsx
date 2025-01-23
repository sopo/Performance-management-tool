import { useDeleteUser } from "@/hooks/use-delete-user";
import { Peer } from "@/types/types";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PeerListItem from "./peer-list-item";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEYS } from "@/hooks/enums";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";

interface PeerListItemProps {
  peer: Peer;
}
const MyEvaluatorsListItem: React.FC<PeerListItemProps> = ({ peer }) => {
  const { lang } = useParams();
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id;
  const navigate = useNavigate();

  const { mutate: deleteUser, isSuccess } = useDeleteUser();

  const peerIdToDelete = peer?.id || 0;
  const handleDelete = (id: number | undefined) => {
    if (!id) {
      return;
    }
    deleteUser(id);
  };

  useEffect(() => {
    if (isSuccess && userId) {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.PEERS, userId] });
      setIsDialogOpen(false);
    }
  }, [isSuccess, navigate, lang, queryClient, userId]);

  return (
    <div className="border-b border-border py-6 flex items-center justify-between">
      <PeerListItem peer={peer} />

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Trash2 className="text-muted-foreground" />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {t("pages.myEvaluators.deleteEvaluator.title")}
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground">
            {t("pages.myEvaluators.deleteEvaluator.description")}
          </p>
          <Button onClick={() => handleDelete(peerIdToDelete)}>
            {t("pages.myEvaluators.deleteEvaluator.cta")}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default MyEvaluatorsListItem;
