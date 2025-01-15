import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { Profile, Questions } from "@/types/types";
interface SurveyQuestionProps {
  question: Questions;
  index: number;
  total: number;
  user?: Profile;
  children?: React.ReactNode;
}
const SurveyQuestion: React.FC<SurveyQuestionProps> = ({
  question,
  index,
  total,
  user,
  children,
}) => {
  const { t } = useTranslation();
  const { lang } = useParams();
  return (
    <div className="mb-6">
      <div key={question.id} className="flex flex-col gap-8 border-b py-16">
        <div>
          <p className="text-sm text-muted-foreground">
            {lang === "en" ? question.category_en : question.category_ka}:{" "}
            {t("pages.survey.question")} {index + 1} / {total}
          </p>
          <p className="text-2xl">
            {lang === "en" ? user?.display_name_en : user?.display_name_ka}{" "}
            {lang === "en" ? question.title_en : question.title_ka}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};
export default SurveyQuestion;
