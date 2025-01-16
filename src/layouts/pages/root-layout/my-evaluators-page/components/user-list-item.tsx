import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Profile } from "@/types/types";
import { useParams } from "react-router";
interface UserListItemProps {
  user: Profile;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  const { lang } = useParams();
  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar className="hidden sm:block">
        <AvatarFallback>
          <p className="text-small text-foreground">
            {lang === "en"
              ? user.display_name_en?.[0]
              : user.display_name_ka?.[0]}
          </p>
        </AvatarFallback>
      </Avatar>
      <p>
        {lang === "en" ? user.display_name_en : user.display_name_ka}{" "}
        <span className="text-muted-foreground">•</span>{" "}
        <span className="text-muted-foreground">
          {lang === "en" ? user.position_en : user.position_ka}
        </span>
      </p>
    </div>
  );
};
export default UserListItem;
