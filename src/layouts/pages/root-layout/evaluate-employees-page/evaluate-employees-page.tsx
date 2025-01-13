import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import useGetPeersToEvaluate from "@/hooks/use-get-peers-to-evaluate";
import EmptyState from "./components/evaluate-employees-empty-state";
import EvaluateEmployeesList from "./components/evaluate-employees-list";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const EvaluateEmployeesPage: React.FC = () => {
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id || "";
  const { data } = useGetPeersToEvaluate({ id: userId });
  console.log("ecal data", data);
  if (!data || data.length === 0) {
    return <EmptyState />;
  }

  return (
    <>
      <EvaluateEmployeesList peers={data} />

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
export default EvaluateEmployeesPage;
