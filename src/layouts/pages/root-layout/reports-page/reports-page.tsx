import Text from "@/components/text/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useGetAnswers from "@/hooks/use-get-answers";
import useGetQuestions from "@/hooks/use-get-questions";
import { UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { SquareChartGantt } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

const ReportsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
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
      <Card>
        <CardHeader>
          <CardTitle>
            <p className="text-sm font-semibold uppercase text-muted-foreground">
              {t("pages.reports.scoreByQuestions")}
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {questions?.map((question) => {
            const filteredAnswers = answers?.filter(
              (answer) => answer.question_id === question.id
            );

            const averageScore = filteredAnswers
              ? filteredAnswers.reduce(
                  (acc, answer) => acc + (answer.score || 0),
                  0
                ) / filteredAnswers.length
              : null;

            return (
              <div key={question.id} className="mb-6">
                <p className="text-xl font-medium text-foreground mb-1">
                  {lang === "en" ? question.title_en : question.title_ka}
                </p>
                <p>
                  {`${t("pages.reports.score")} ${averageScore && averageScore.toFixed(2)}/10`}
                </p>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};
export default ReportsPage;
