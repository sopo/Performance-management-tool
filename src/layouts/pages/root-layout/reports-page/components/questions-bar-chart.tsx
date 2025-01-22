"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { t } from "i18next";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  score: {
    label: "pages.reports.scores",
  },
  maxScore: {
    label: "pages.reports.maxScore",
    color: "hsl(var(--chart-1))",
  },
  yourScore: {
    label: "pages.reports.yourScore",
    color: "hsl(var(--chart-2))",
  },
  benchmark: {
    label: "pages.reports.benchmarkScore",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

interface QuestionsBarChartProps {
  score: number;
}

export function QuestionsBarChart({ score }: QuestionsBarChartProps) {
  const chartData = [
    { score: "maxScore", sum: 10, fill: "var(--color-maxScore)" },
    { score: "yourScore", sum: score, fill: "var(--color-yourScore)" },
    { score: "benchmark", sum: 7, fill: "var(--color-benchmark)" },
  ];
  const percentage = Math.round(100 - (7 / score) * 100);
  return (
    <div className="flex flex-col items-center my-6">
      <CardContent className="flex justify-center items-center w-full">
        <ChartContainer config={chartConfig} className="w-[600px] h-[200px]">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <YAxis
              dataKey="score"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                t(chartConfig[value as keyof typeof chartConfig]?.label)
              }
              width={200}
            />
            <XAxis dataKey="sum" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value) => `${value}`}
                  hideLabel
                />
              }
            />
            <Bar dataKey="sum" layout="vertical" radius={5} barSize={40} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-2 font-medium leading-none text-sm text-foreground">
          {percentage}%{" "}
          {percentage > 0 ? t("pages.reports.above") : t("pages.reports.below")}{" "}
          {t("pages.reports.benchmark")}
          <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </div>
  );
}
