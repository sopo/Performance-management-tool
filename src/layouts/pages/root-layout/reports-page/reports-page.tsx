import Text from "@/components/text/text";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";
import useGetAnswers from "@/hooks/use-get-answers";
import useGetQuestions from "@/hooks/use-get-questions";
import { UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const ReportsPage: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id || "";
  const { data: answers } = useGetAnswers({ id: userId });
  const { data: questions } = useGetQuestions();
  const sumOfEvaluators = [...new Set(answers?.map((answer) => answer.user_id))]
    .length;

  const chartData = [
    { score: "max", visitors: 275, fill: "var(--color-max)" },
    { score: "average", visitors: 200, fill: "var(--color-average)" },
    { score: "your", visitors: 187, fill: "var(--color-your)" },
  ];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    max: {
      label: "max",
      color: "hsl(var(--chart-1))",
    },
    average: {
      label: "average",
      color: "hsl(var(--chart-2))",
    },
    your: {
      label: "your",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;
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
            <div key={question.id}>
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
                      Average Score: {averageScore && averageScore.toFixed(2)}
                    </p>
                  </>
                )}
              </div>
            </div>
          );
        })}

        <Card className="w-96">
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData}
                layout="vertical"
                margin={{
                  left: 0,
                }}
              >
                <YAxis
                  dataKey="score"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) =>
                    chartConfig[value as keyof typeof chartConfig]?.label
                  }
                />
                <XAxis dataKey="visitors" type="number" hide />
         
                <Bar dataKey="visitors" layout="vertical" radius={5} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default ReportsPage;
