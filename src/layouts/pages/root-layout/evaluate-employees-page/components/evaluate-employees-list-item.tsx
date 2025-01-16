import { Peer } from "@/types/types";
import { ArrowRight, CircleCheck } from "lucide-react";
import PeerListItem from "./peer-list-item";

interface EvaluateEmployeesListItemProps {
  peer: Peer;
}
const EvaluateEmployeesListItem: React.FC<EvaluateEmployeesListItemProps> = ({
  peer,
}) => {
  return (
    <div
      key={peer.id}
      className="border-b border-border py-6 flex items-center justify-between hover:cursor-pointer"
    >
      <PeerListItem peer={peer} />
      <p>
        {peer.is_evaluated ? (
          <CircleCheck className="text-green-600" />
        ) : (
          <ArrowRight className="text-muted-foreground" />
        )}
      </p>
    </div>
  );
};
export default EvaluateEmployeesListItem;
