import { ProfileAtom, UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import UserInfoCardItem from "./user-info-card-item";

const UserInfoCard: React.FC = () => {
  const profile = useAtomValue(ProfileAtom);
  const user = useAtomValue(UserAtom);
  return (
    <div className="flex flex-col gap-8">
      <UserInfoCardItem
        title="pages.profile.fullName"
        description={`${profile?.display_name_en} / ${profile?.display_name_ka}`}
      />
      <UserInfoCardItem
        title="pages.profile.position"
        description={`${profile?.position_en} / ${profile?.position_ka}`}
        noIcon={true}
      />
      <UserInfoCardItem
        title="pages.profile.email"
        description={user?.user.email || ""}
      />
    </div>
  );
};
export default UserInfoCard;
