import Text from "@/components/text/text";
import useGetAnswers from "@/hooks/use-get-answers";
import useGetQuestions from "@/hooks/use-get-questions";
import { UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
const ReportsPage: React.FC = () => {
  const { t } = useTranslation();
  const {lang} = useParams()
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id || "";
  const { data: answers } = useGetAnswers({ id: userId });
  const { data: questions } = useGetQuestions();
  const sumOfEvaluators = [...new Set(answers?.map((answer) => answer.user_id))].length;

  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.reports.title")}</Text>
      <div className="flex flex-col gap-8">
        {answers && (
          <Text type="title-medium">
            {t("pages.reports.reportTitle")} {sumOfEvaluators}{" "}
            {t("pages.reports.evaluators")}
          </Text>
        )}
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
            <div key={question.id} >
              <p className="text-xl text-foreground">
                {lang === "en" ? question.title_en : question.title_ka}
              </p>
              <div>
                {filteredAnswers && (
                  <>
                    {filteredAnswers.map((answer) => (
                      <p key={answer.id}>Answer: {answer.score}</p>
                    ))}
                    <p>
                      Average Score:{" "}
                      {averageScore && averageScore.toFixed(2) }
                    </p>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ReportsPage;
