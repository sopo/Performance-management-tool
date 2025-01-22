"use client";
import { Answer } from "@/types/types";
import { t } from "i18next";
import { getAverageScore } from "../utils/get-average-score";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
interface TotalScoreCardProps {
  answers: Answer[];
}
const TotalScoreCard: React.FC<TotalScoreCardProps> = ({ answers }) => {
  const average = getAverageScore(answers) || 0;
  const remaining = 10 - average;
  const benchmark = 7;
  const percentage = Math.round(100 - (benchmark / average) * 100);

  const chartData = [
    { score: average, fill: "hsl(var(--chart-1))" },
    { score: remaining, fill: "hsl(var(--chart-2))" },
  ];
  const chartConfig = {
    score: {
      label: "Score",
    },
    remaining: {
      label: "Remaining",
    },
  } satisfies ChartConfig;
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          {" "}
          <p className="text-sm font-semibold uppercase text-muted-foreground">
            {t("pages.reports.totalResult")}
          </p>
        </CardTitle>
        <CardDescription>{t("pages.reports.scoreForToday")}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="score"
              nameKey="label"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {average}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          {t("pages.reports.yourScore")}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          {percentage}%  {percentage > 0 ? t("pages.reports.above") : t("pages.reports.below")}{" "}{t("pages.reports.benchmark")}
          <TrendingUp className="h-4 w-4"  />
        </div>
        <div className="leading-none text-muted-foreground">
          {t("pages.reports.shownSum")}
        </div>
      </CardFooter>
    </Card>
  );
};
export default TotalScoreCard;
