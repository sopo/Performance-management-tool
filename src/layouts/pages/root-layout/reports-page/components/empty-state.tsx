import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { t } from "i18next";
import { ChartPie, Info } from "lucide-react";


const EmptyState: React.FC = () => {

  return (
    <Card className="flex-1 bg-gray-50 dark:bg-gray-800">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-normal text-muted-foreground">
            {t("pages.reports.emptyState.title")}
          </CardTitle>
          <ChartPie className="text-muted-foreground w-5 h-5" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 ">
        <div className="flex gap-2 items-center pb-4 ">
          <Info className="text-muted-foreground w-5 h-5" />
          <p className="text-muted-foreground text-sm">
            {t("pages.reports.emptyState.description")}
          </p>
        </div>
      </CardContent>
    
    </Card>
  );
};
export default EmptyState;
