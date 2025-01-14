import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Answer } from "@/types/types";
import { t } from "i18next";
import { getAverageScore } from "../utils/get-average-score";
interface TotalScoreCardProps {
  answers: Answer[];
}
const TotalScoreCard: React.FC<TotalScoreCardProps> = ({ answers }) => {
  const average = getAverageScore(answers);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p className="text-sm font-semibold uppercase text-muted-foreground">
            {t("pages.reports.totalResult")}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-baseline">
        <p className="text-2xl font-semibold text-primary">
          {average}
          <span className="text-sm font-semibold text-muted-foreground">
            {" "}
            / 10
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
export default TotalScoreCard;
