import Text from "@/components/text/text";
import { ProfileAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import UserProfileCard from "./components/user-profile-card";
import Loader from "@/components/ui/loader";

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();

  const user = useAtomValue(ProfileAtom);
  if (!user) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.profile.title")}</Text>
      <div className="flex flex-col gap-8 ">
        <UserProfileCard />
      </div>
    </div>
  );
};
export default ProfilePage;
