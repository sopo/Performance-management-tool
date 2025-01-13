import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import ChoosePeersCard from "./components/choose-peers-card/choose-peers-card";
import EvaluatePeersCard from "./components/evaluate-peers-card/evaluate-peers-card";
import MyEvaluationResultsCard from "./components/my-evaluation-results-card/my-evaluation-results-card";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.home.title")}</Text>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
        <ChoosePeersCard />
        <EvaluatePeersCard />
        <MyEvaluationResultsCard />
      </div>
    </div>
  );
};
export default HomePage;
