import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { t } from "i18next";
import { UsersRound, ArrowRight } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import useGetMyPeers from "@/hooks/use-get-my-peers";
import { ROOT_PATHS } from "../../../root.enums";
import FilledCardContent from "./filled-card-content";
import CardEmptyState from "./card-empty-state";
import { SkeletonCard } from "@/components/ui/skeleton-card";

const ChoosePeersCard: React.FC = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const onClick = () => {
    navigate(`/${lang}/${ROOT_PATHS.MY_EVALUATORS}`);
  };
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id || "";
  const { data, isLoading } = useGetMyPeers({ id: userId });

  if (isLoading) {
    return <SkeletonCard />;
  }
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-normal">
            {t("global.myEvaluators")}
          </CardTitle>
          <UsersRound className="text-muted-foreground w-5 h-5" />
        </div>
        <CardDescription>{t("global.chooseEvaluators")}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 ">
        {data && data.length > 0 ? (
          <FilledCardContent peerNumber={data.length} />
        ) : (
          <CardEmptyState />
        )}
      </CardContent>
      <CardFooter className="w-full">
        <Button onClick={onClick} className="w-full">
          <ArrowRight />
          {data && data.length > 0
            ? t("global.view")
            : t("global.chooseEvaluators")}
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ChoosePeersCard;
