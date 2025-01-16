import { Checkbox } from "@/components/ui/checkbox";
import { Profile } from "@/types/types";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import UserListItem from "./user-list-item";

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
  const { t } = useTranslation();


  return (
    <label
      htmlFor={`checkbox-${user.id}`}
      key={user.id}
      className="flex border-b border-border py-6  justify-between hover:cursor-pointer"
    >
     <UserListItem user={user} />
      {disabled ? (
        <div className="flex gap-2">
          <Check className="text-green-500" />
          <p className="text-muted-foreground text-sm hidden md:block">
            {t("pages.chooseEvaluators.alreadySelected")}
          </p>
        </div>
      ) : (
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
