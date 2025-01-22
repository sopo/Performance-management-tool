"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts"

import {
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { t } from "i18next"


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

} satisfies ChartConfig

interface QuestionsBarChartProps {
    score: number;
  }
  
  export function QuestionsBarChart({ score }: QuestionsBarChartProps) {
    const chartData = [
        { score: "maxScore", sum: 10, fill: "var(--color-maxScore)" },
        { score: "yourScore", sum: score, fill: "var(--color-yourScore)" },
        { score: "benchmark", sum: 7, fill: "var(--color-benchmark)" },
      ]
  return (
  <>
      <CardContent className="flex justify-center items-center w-full my-6">
        <ChartContainer config={chartConfig} className="w-full max-w-96">
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
               t( chartConfig[value as keyof typeof chartConfig]?.label)
              }
            />
            <XAxis dataKey="sum" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="sum" layout="vertical" radius={5} barSize={40} />
          </BarChart>
        </ChartContainer>
      </CardContent>

      </>
  )
}
