import { Info } from "lucide-react";
import { useTranslation } from "react-i18next";

const CardEmptyState: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-2 border-t border-b border-border pt-4 pb-4">
      <p className=" text-foreground text-md">
        {t("pages.reports.emptyState.title")}
      </p>

      <div className="flex gap-2 items-start ">
        <Info className="text-muted-foreground w-5 h-5" />
        <p className="text-muted-foreground text-sm">
          {t("pages.reports.emptyState.description")}
        </p>
      </div>
    </div>
  );
};
export default CardEmptyState;
