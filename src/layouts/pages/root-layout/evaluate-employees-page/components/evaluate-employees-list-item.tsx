import { Peer } from "@/types/types";
import { ArrowRight, CircleCheck } from "lucide-react";
import PeerListItem from "./peer-list-item";
import { useNavigate } from "react-router";

interface EvaluateEmployeesListItemProps {
  peer: Peer;
}
const EvaluateEmployeesListItem: React.FC<EvaluateEmployeesListItemProps> = ({
  peer,
}) => {
  const navigate = useNavigate();
  return (
    <div
      key={peer.id}
      className="border-b border-border py-6 flex items-center justify-between hover:cursor-pointer"
      onClick={() => navigate(`${peer.user_id}`)}
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
