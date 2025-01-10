import Screen from "@/components/containers/screen";
import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import useGetPeersToEvaluate from "@/hooks/use-get-peers-to-evaluate";
import EmptyState from "./components/evaluate-employees-empty-state";
import EvaluateEmployeesListItem from "./components/evaluate-employees-list-item";
const EvaluateEmployeesList: React.FC = () => {
  const { t } = useTranslation();
    const user = useAtomValue(UserAtom)
  const userId = user?.user.id || ""
  const {data} = useGetPeersToEvaluate({id: userId})


  return (
    <Screen>
      <div className="flex flex-col gap-8">
        <Text type="title-large">{t("pages.evaluateEmployees.title")}</Text>
        <div className="flex-col gap-8 lg:gap-8">
          {data && data?.length > 0 ? <EvaluateEmployeesListItem peers={data}/> : <EmptyState />}
        </div>
      </div>
    </Screen>
  );
};
export default EvaluateEmployeesList;
