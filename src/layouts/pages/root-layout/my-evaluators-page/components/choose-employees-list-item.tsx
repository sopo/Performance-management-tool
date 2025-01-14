import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Profile } from "@/types/types";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

export interface UserListItemProps {
  user: Profile;
  onChange: (profile: Profile) => void;
  disabled: boolean;
}
const ChooseEmployeesListItem: React.FC<UserListItemProps> = ({
  user,
  onChange,
  disabled,
}) => {
  const { lang } = useParams();
  const {t} = useTranslation()
  return (
    <label
      htmlFor={`checkbox-${user.id}`}
      key={user.id}
      className="border-b border-border py-6 flex items-center justify-between hover:cursor-pointer"
    >
      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarFallback>
            <p className="text-small text-foreground">
              {lang === "en"
                ? user.display_name_en?.[0]
                : user.display_name_ka?.[0]}
            </p>
          </AvatarFallback>
        </Avatar>
        <div className="flex gap-2">
          <p>{lang === "en" ? user.display_name_en : user.display_name_ka}</p>
          <p className="text-muted-foreground">•</p>
          <p className="text-muted-foreground">
            {lang === "en" ? user.position_en : user.position_ka}
          </p>
        </div>
      </div>
      {disabled ?<div className="flex gap-2"> 
        <Check className="text-green-500"/> 
        <p className="text-muted-foreground text-sm">{t("pages.chooseEvaluators.alreadySelected")}</p>
        </div> : (
        <Checkbox
          className="h-6 w-6"
          id={`checkbox-${user.id}`}
          onCheckedChange={() => onChange(user || "")}
        />
      )}
    </label>
  );
};
export default ChooseEmployeesListItem;
