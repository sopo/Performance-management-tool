import Screen from "@/components/containers/screen";
import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import useGetMyPeers from "@/hooks/use-get-my-peers";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import MyEvaluatorsList from "./my-evaluators-list";
import EmptyState from "../components/my-evaluators-empty-state";

const MyEvaluatorsPage: React.FC = () => {
  const {t} = useTranslation()
  const user = useAtomValue(UserAtom)
  const userId = user?.user.id || ""
  const {data} = useGetMyPeers({id: userId})

  return (
    <Screen>
      <div className="flex flex-col gap-8">
        <Text type="title-large">{t("pages.myEvaluators.title")}</Text>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
    {data && data?.length > 0 ? <MyEvaluatorsList users={data} /> : <EmptyState />}
         
        </div>
      </div>
    </Screen>
  );
};
export default MyEvaluatorsPage;
