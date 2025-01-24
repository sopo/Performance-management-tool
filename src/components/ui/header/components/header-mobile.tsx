import Logo from "@/assets/Group 1.svg";
import { Menu } from "lucide-react";
import { Link, NavLink, useParams } from "react-router";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from "react-i18next";
import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";
const HeaderMobile: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-small border-b border-border py-4 ${isActive ? " text-primary" : "text-secondary-foreground "} `;
  return (
    <div className="flex justify-between h-[80px] items-center">
      <Link to="/" className="self-center">
        <img src={Logo} className="w-8" alt="" />
      </Link>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col">
            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.DASHBOARD}`}
            >
              {t("global.dashboard")}
            </NavLink>
            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.MY_EVALUATORS}`}
            >
              {t("global.myEvaluators")}
            </NavLink>
            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.EVALUATE_EMPLOYEES}`}
            >
              {t("global.evaluateEmployees")}
            </NavLink>
            <NavLink
              className={navLinkClass}
              to={`/${lang}/${ROOT_PATHS.REPORTS}`}
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
