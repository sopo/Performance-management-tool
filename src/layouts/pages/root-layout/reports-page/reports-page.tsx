import Text from "@/components/text/text";
import useGetAnswers from "@/hooks/use-get-answers";
import useGetQuestions from "@/hooks/use-get-questions";
import { UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
const ReportsPage: React.FC = () => {
  const { t } = useTranslation();
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id || "";
  const {data} = useGetAnswers({id: userId})
  const {data: questions} = useGetQuestions()
  console.log("ans", data)
  console.log("userId", userId)
  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.reports.title")}</Text>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-8">
        {data?.map((answer) => {
        return <p>{answer.question_id} - score {answer.score}</p> 
        })}
        {questions?.map((question) => {
          return <p>{question.id} - {question.title_en}</p>
})}
      </div>
    </div>
  );
};
export default ReportsPage;
