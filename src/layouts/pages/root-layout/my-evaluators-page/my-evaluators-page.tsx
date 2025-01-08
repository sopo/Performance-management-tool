import Screen from "@/components/containers/screen";
import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import EmptyState from "./components/my-evaluators-empty-state";
import { Outlet } from "react-router";
const MyEvaluatorsPage: React.FC = () => {
  const {t} = useTranslation()
  return (
    <Screen>
      <div className="flex flex-col gap-8">
        <Text type="title-large">{t("pages.myEvaluators.title")}</Text>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
         <EmptyState />
          <Outlet />
        </div>
      </div>
    </Screen>
  );
};
export default MyEvaluatorsPage;
