
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import useGetPeersToEvaluate from "@/hooks/use-get-peers-to-evaluate";
import EmptyState from "./components/evaluate-employees-empty-state";

import EvaluateEmployeesList from "./components/evaluate-employees-list";
const EvaluateEmployeesPage: React.FC = () => {

    const user = useAtomValue(UserAtom)
  const userId = user?.user.id || ""
  const {data} = useGetPeersToEvaluate({id: userId})
  
  if(!data || data.length === 0){
    return <EmptyState />
  }

  return (
    <EvaluateEmployeesList peers={data} />
  );
};
export default EvaluateEmployeesPage;
