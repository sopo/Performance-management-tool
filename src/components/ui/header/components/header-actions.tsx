import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useLogOut from "@/hooks/use-log-out";
import { AUTH_PATHS } from "@/layouts/pages/autorization-layout/authorization.enums";

const HeaderActions: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  const { mutate: logOut, isLoading } = useLogOut(() => {
    navigate(AUTH_PATHS.SIGN_IN);
  });
  return (
    <div className="flex gap-4 items-center">
      <Bell className="w-9 h-9 text-icon-primary px-2 rounded hover:bg-gray-100 cursor-pointer" />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback><p className="text-small text-foreground">CN</p></AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link to={ROOT_PATHS.PROFILE}>
            <DropdownMenuItem>{t("global.profile")}</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => logOut()}>{t("global.logOut")}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default HeaderActions;
