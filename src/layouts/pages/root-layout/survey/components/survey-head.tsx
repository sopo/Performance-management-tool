import { Profile } from "@/types/types";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
interface SurveyHeadProps {
  user?: Profile;
  total: number;
}
const SurveyHead: React.FC<SurveyHeadProps> = ({ user, total }) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  return (
    <div>
      <p className="text-3xl">{`${t("pages.survey.evaluate")} ${lang === "en" ? user?.display_name_en : user?.display_name_ka}`}</p>
      <p className="text-md text-muted-foreground border-b border-border pb-6">
        {t("pages.survey.total")} {total}
      </p>
    </div>
  );
};
export default SurveyHead;
