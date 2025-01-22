import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Answer, Questions } from "@/types/types";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

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
            (answer) => answer.question_id === question.id,
          );

          const averageScore = filteredAnswers
            ? filteredAnswers.reduce(
                (acc, answer) => acc + (answer.score || 0),
                0,
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


</>
  );
};
export default ResultsByQuestionsCard;
