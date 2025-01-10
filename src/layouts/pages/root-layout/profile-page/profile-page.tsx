import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.profile.title")}</Text>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-8"></div>
    </div>
  );
};
export default ProfilePage;
