import Text from "@/components/text/text";
import useGetAnswers from "@/hooks/use-get-answers";
import useGetQuestions from "@/hooks/use-get-questions";
import { UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import ResultsByQuestionsCard from "./components/results-by-questions-card";
import { Answer, Questions } from "@/types/types";
import TotalScoreCard from "./components/total-score-card";

const ReportsPage: React.FC = () => {
  const { t } = useTranslation();
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id || "";
  const { data: answers } = useGetAnswers({ id: userId });
  const { data: questions } = useGetQuestions();
  const sumOfEvaluators = [...new Set(answers?.map((answer) => answer.user_id))]
    .length;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 border-b border-border pb-4">
        <Text type="title-large">{t("pages.reports.title")}</Text>
        {answers && (
          <p className="text-muted-foreground">
            {t("pages.reports.reportTitle")} {sumOfEvaluators}{" "}
            {t("pages.reports.evaluators")}
          </p>
        )}
      </div>
        <TotalScoreCard answers={answers as Answer[]} />
      <ResultsByQuestionsCard questions={questions as Questions[]} answers={answers as Answer[]} />

    </div>
  );
};
export default ReportsPage;
