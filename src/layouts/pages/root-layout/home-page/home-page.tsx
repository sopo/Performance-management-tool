import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import MyEvaluatorsCard from "./components/my-evaluators-card/my-evaluators-card";
import ChoosePeersCard from "./components/choose-peers-card/choose-peers-card";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.home.title")}</Text>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
        <ChoosePeersCard />
        <MyEvaluatorsCard />
        <ChoosePeersCard />
      </div>
    </div>
  );
};
export default HomePage;
