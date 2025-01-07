import Screen from "@/components/containers/screen";
import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import ChoosePeersCard from "./components/choose-peers-card";

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Screen>
      <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.home.title")}</Text>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
      <ChoosePeersCard />
      <ChoosePeersCard />
      <ChoosePeersCard />
      </div>
      </div>
    </Screen>
  );
};
export default HomePage;
