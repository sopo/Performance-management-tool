import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Answer, Questions } from "@/types/types";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { QuestionsBarChart } from "./questions-bar-chart";
interface ResultsByQuestionsCardProps {
  questions: Questions[];
  answers: Answer[];
}
const ResultsByQuestionsCard: React.FC<ResultsByQuestionsCardProps> = ({
  questions,
  answers,
}) => {
  const { lang } = useParams();
  const { t } = useTranslation();

  return (
    <>
      <Card>
        <CardHeader className="items-center">
          <CardTitle>
            <p className="text-sm font-semibold uppercase text-muted-foreground">
              {t("pages.reports.scoreByQuestions")}
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {questions?.map((question) => {
            const filteredAnswers = answers?.filter(
              (answer) => answer.question_id === question.id,
            );

            const averageScore = filteredAnswers
              ? filteredAnswers.reduce(
                  (acc, answer) => acc + (answer.score || 0),
                  0,
                ) / filteredAnswers.length
              : 0;

            return (
              <div
                key={question.id}
                className="mb-6 flex flex-col items-center gap-2 border-b border-border"
              >
                <p className="text-3xl font-medium text-foreground mb-1 text-center">
                  {lang === "en" ? question.title_en : question.title_ka}
                </p>
                <p className="font-medium text-muted-foreground">
                  {`${t("pages.reports.score")} ${averageScore && averageScore.toFixed(2)}/10`}
                </p>
                <QuestionsBarChart score={averageScore ? averageScore : 0} />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};
export default ResultsByQuestionsCard;
