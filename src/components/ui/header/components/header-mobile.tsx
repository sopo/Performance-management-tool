import Logo from "@/assets/Group 1.svg";
import { Menu } from "lucide-react";
import { Link, NavLink, useParams } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";
import { useState } from "react";
const HeaderMobile: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCloseSheet = () => {
    setIsSheetOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-small border-b border-border py-4 ${isActive ? " text-primary" : "text-secondary-foreground "} `;
  
  return (
    <div className="flex justify-between h-[80px] items-center">

      <Link to="/" className="self-center">
        <img src={Logo} className="w-8" alt="" />
      </Link>

      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetTrigger onClick={() => setIsSheetOpen(true)}>
          <Menu />
        </SheetTrigger>

        <SheetContent>
          <div className="flex flex-col">
            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.PROFILE}`}
              onClick={handleCloseSheet}
            >
              {t("global.profile")}
            </NavLink>

            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.DASHBOARD}`}
              onClick={handleCloseSheet}
            >
              {t("global.dashboard")}
            </NavLink>

            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.MY_EVALUATORS}`}
              onClick={handleCloseSheet}
            >
              {t("global.myEvaluators")}
            </NavLink>

            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.EVALUATE_EMPLOYEES}`}
              onClick={handleCloseSheet}
            >
              {t("global.evaluateEmployees")}
            </NavLink>

            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.REPORTS}`}
              onClick={handleCloseSheet}
            >
              {t("global.reports")}
            </NavLink>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default HeaderMobile;
