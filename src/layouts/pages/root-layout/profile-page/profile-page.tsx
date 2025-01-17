import Text from "@/components/text/text";
import { ProfileAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import UserProfileCard from "./components/user-profile-card";
import Loader from "@/components/ui/loader";
import UserInfoCard from "./components/user-info-card";

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const user = useAtomValue(ProfileAtom);

  if (!user) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col ">
      <UserProfileCard />
      <Text type="title-medium">{t("pages.profile.info")}</Text>
      <UserInfoCard />
    </div>
  );
};
export default ProfilePage;
