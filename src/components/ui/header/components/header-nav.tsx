import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useParams } from "react-router";
import Logo from "@/assets/Group 1.svg";
const HeaderNav: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-7 text-small ${isActive ? "border-b-2 border-primary  text-primary" : "text-secondary-foreground"} ${!isActive ? "hover:border-b-2 hover:border-gray-300" : ""}`;
  return (
    <div>
      <div className="flex gap-8">
        <Link to={`/${lang}/${ROOT_PATHS.DASHBOARD}`} className="self-center">
          <img src={Logo} className="w-8" alt="" />
        </Link>
        <div className="flex gap-6">
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
      </div>
    </div>
  );
};
export default HeaderNav;
