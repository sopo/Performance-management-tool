import Screen from "@/components/containers/screen";
import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";

import EvaluateEmployeesListItem from "./evaluate-employees-list-item";
import { Peer } from "@/types/types";

interface EvaluateEmployeesListProps{
    peers: Peer[]
}
const EvaluateEmployeesList: React.FC<EvaluateEmployeesListProps> = ({peers}) => {
  const { t } = useTranslation();


  return (
    <Screen>
      <div className="flex flex-col gap-8">
        <Text type="title-large">{t("pages.evaluateEmployees.title")}</Text>
        <div className="flex-col gap-8 lg:gap-8">
          <EvaluateEmployeesListItem peers={peers}/>
        </div>
      </div>
    </Screen>
  );
};
export default EvaluateEmployeesList;
