import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import EmptyState from "./components/evaluate-employees-empty-state";
import EvaluateEmployeesList from "./components/evaluate-employees-list";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import useGetPeersToEvaluateCount from "@/hooks/use-get-peers-to-evaluate-count";
import { PEERS_LIMIT } from "@/api/get/get-peers";
import { useLocation } from "react-router";
import useGetPeersToEvaluateWithPagination from "@/hooks/use-get-peers-to-evaluate-with-pagination";

const EvaluateEmployeesPage: React.FC = () => {
  const user = useAtomValue(UserAtom);
  const userId = user?.user.id || "";
  const { hash } = useLocation();
  const page = hash !== "" ? parseInt(hash.replace("#", "")) : 0;

  const { data } = useGetPeersToEvaluateWithPagination({ id: userId, page });
  const { data: count } = useGetPeersToEvaluateCount({ id: userId });
  if (count === undefined) {
    return <EmptyState />;
  }
  const pageCount = Math.ceil(count / PEERS_LIMIT);
  const pages = new Array(pageCount).fill(0);
  if (!data || count === 0) {
    return <EmptyState />;
  }
  return (
    <>
      <EvaluateEmployeesList peers={data} />
      <Pagination>
        <PaginationContent>
          {pages.map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink isActive={index === page} href={`#${index}`}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </>
  );
};
export default EvaluateEmployeesPage;
