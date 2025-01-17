import { ProfileAtom, UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import UserInfoCardItem from "./user-info-card-item";
import EditUserNameForm from "./edit-name/edit-user-name-form";


const UserInfoCard: React.FC = () => {
  const profile = useAtomValue(ProfileAtom);
  const user = useAtomValue(UserAtom);
  return (
    <div className="flex flex-col">
   
      <UserInfoCardItem
        title="pages.profile.fullName"
        description={`${profile?.display_name_en} / ${profile?.display_name_ka}`}
      >
          <EditUserNameForm />
      </UserInfoCardItem>
      <UserInfoCardItem
        title="pages.profile.position"
        description={`${profile?.position_en} / ${profile?.position_ka}`}
      />
      <UserInfoCardItem
        title="pages.profile.email"
        description={user?.user.email || ""}
      />
    </div>
  );
};
export default UserInfoCard;
