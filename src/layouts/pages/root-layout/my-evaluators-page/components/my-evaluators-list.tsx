import { Peer } from "@/types/types";
import MyEvaluatorsListItem from "./my-evaluators-list-item";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { ROOT_PATHS } from "../../root.enums";

import Text from "@/components/text/text";
interface MyEvaluatorsListProps {
  users: Peer[];
}
const MyEvaluatorsList: React.FC<MyEvaluatorsListProps> = ({ users }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const onClick = () => {
    navigate(ROOT_PATHS.CHOOSE_EMPLOYEES);
  };
  console.log(users);
  return (
    <div className="flex flex-col gap-8">
      <Text type="title-large">{t("pages.myEvaluators.title")}</Text>
      <div className="w-full flex flex-col">
        {users.map((user) => (
          <MyEvaluatorsListItem peer={user} key={user.peer_id} />
        ))}
      </div>
      <Button onClick={onClick}>{t("pages.myEvaluators.addMorePeers")}</Button>
    </div>
  );
};
export default MyEvaluatorsList;
