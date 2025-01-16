import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import EvaluateEmployeesListItem from "./evaluate-employees-list-item";
import { Peer } from "@/types/types";

interface EvaluateEmployeesListProps {
  peers: Peer[];
}
const EvaluateEmployeesList: React.FC<EvaluateEmployeesListProps> = ({
  peers,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.evaluateEmployees.title")}</Text>
      <div>
           {peers.map((peer) => (
          <EvaluateEmployeesListItem peer={peer} key={peer.id} />
        ))}
      </div>
    </div>
  );
};
export default EvaluateEmployeesList;
