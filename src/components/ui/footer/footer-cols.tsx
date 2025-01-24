import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import LangToggle from "../header/components/lang-toggle";
import { ModeToggle } from "@/components/mode-toggle";

const FooterCols: React.FC = () => {
  const { t } = useTranslation();
  const LinkClass = "text-small text-secondary-foreground";
  return (
    <div className="flex flex-col gap-12 md:flex-row md:gap-32 py-8 border-b border-border">
      <div className="flex flex-col gap-4">
        <p className="text-small font-medium text-foreground">
          {t("global.evaluation")}
        </p>
        <Link className={LinkClass} to={ROOT_PATHS.MY_EVALUATORS}>
          {t("global.myEvaluators")}
        </Link>
        <Link className={LinkClass} to={ROOT_PATHS.EVALUATE_EMPLOYEES}>
          {t("global.evaluateEmployees")}
        </Link>
        <Link className={LinkClass} to={ROOT_PATHS.REPORTS}>
          {t("global.reports")}
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-small font-medium text-foreground">
          {t("help.help")}
        </p>
        <Link className={LinkClass} to="">
          {t("help.faq")}
        </Link>
        <Link className={LinkClass} to="">
          {t("help.guideline")}
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-small font-medium text-foreground">
          {t("help.help")}
        </p>
        <Link className={LinkClass} to="">
          {t("help.faq")}
        </Link>
        <Link className={LinkClass} to="">
          {t("help.guideline")}
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-small font-medium text-foreground">
          {t("global.settings")}
        </p>
        <div className="flex flex-row items-start gap-4">
          <LangToggle />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
export default FooterCols;
