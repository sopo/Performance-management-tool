import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Peer } from "@/types/types";
import { Link, useParams } from "react-router";
import { ROOT_PATHS } from "../../root.enums";

interface EvaluateEmployeesListItemProps {
  peers: Peer[];
}
const EvaluateEmployeesListItem: React.FC<EvaluateEmployeesListItemProps> = ({
  peers,
}) => {
  const { lang } = useParams();

  return (
    <div>
      {peers.map((peer) => (
        <div
          key={peer.id}
          className="border-b border-border py-6 flex items-center justify-between hover:cursor-pointer"
        >
          <div className="flex gap-4 items-center">
            <Avatar>
              <AvatarFallback>
                <p className="text-small text-foreground">
                  {lang === "en"
                    ? peer.user_display_name_en?.[0]
                    : peer.user_display_name_ka?.[0]}
                </p>
              </AvatarFallback>
            </Avatar>
            <Link
              to={`/${lang}/${ROOT_PATHS.EVALUATE_EMPLOYEES}/${peer.user_id}`}
              className="flex gap-2"
            >
              {lang === "en"
                ? peer.user_display_name_en
                : peer.user_display_name_ka}{" "}
              <p className="text-muted-foreground">
                •{" "}
                {lang === "en" ? peer.user_position_en : peer.user_position_ka}
              </p>
            </Link>
          </div>
          <p>status</p>
        </div>
      ))}
    </div>
  );
};
export default EvaluateEmployeesListItem;
