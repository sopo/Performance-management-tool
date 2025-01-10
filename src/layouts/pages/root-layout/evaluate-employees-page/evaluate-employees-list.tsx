import Screen from "@/components/containers/screen";
import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useParams } from "react-router";
import { ROOT_PATHS } from "../root.enums";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import useGetPeersToEvaluate from "@/hooks/use-get-peers-to-evaluate";
import EmptyState from "./components/evaluate-employees-empty-state";
const EvaluateEmployeesList: React.FC = () => {
  const { t } = useTranslation();
  const {lang} = useParams()
    const user = useAtomValue(UserAtom)
  const userId = user?.user.id || ""
  const {data} = useGetPeersToEvaluate({id: userId})


  return (
    <Screen>
      <div className="flex flex-col gap-8">
        <Text type="title-large">{t("pages.evaluateEmployees.title")}</Text>
        <div className="flex-col gap-8 lg:gap-8">
          {data?.length === 0 && <EmptyState />}
          {data?.map((peer) => {
            return (
              <div
                key={peer.id}
                className="border-b border-border py-6 flex items-center justify-between hover:cursor-pointer"
              >
                <div className="flex gap-4 items-center">
                <Avatar>
                  <AvatarFallback>
                    <p className="text-small text-foreground">
                      {lang === "en" ? peer.user_display_name_en?.[0] : peer.user_display_name_ka?.[0]}
                    </p>
                  </AvatarFallback>
                </Avatar>
                <Link
                  to={`/${lang}/${ROOT_PATHS.EVALUATE_EMPLOYEES}/${peer.id}`}
                  className="flex gap-2"
                >
                  {lang==="en" ?  peer.user_display_name_en : peer.user_display_name_ka }{" "}
                  <p className="text-muted-foreground">• {lang==="en" ?  peer.user_position_en : peer.user_position_ka}</p>
                </Link>
              </div>
              <p>status</p>
              </div>
            );
          })}
          <Outlet />
        </div>
      </div>
    </Screen>
  );
};
export default EvaluateEmployeesList;
