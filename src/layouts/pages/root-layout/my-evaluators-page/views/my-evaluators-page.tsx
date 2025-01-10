import useGetMyPeers from "@/hooks/use-get-my-peers";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import MyEvaluatorsList from "../components/my-evaluators-list";
import EmptyState from "../components/my-evaluators-empty-state";

const MyEvaluatorsPage: React.FC = () => {
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id || "";
  const { data: users } = useGetMyPeers({ id: userId });

  if (!users || users.length === 0) {
    return (
        <EmptyState />
    );
  }
  return (
     <MyEvaluatorsList users={users} />
  );
};
export default MyEvaluatorsPage;
