import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { getQuestions } from "@/api/get-questions";
import { QUERY_KEYS } from "./enums"; 
import { Questions } from "@/types/types";


const useGetQuestions = <T = Questions[]>({
  queryOptions,
}: {
  queryOptions?: Omit<
    UseQueryOptions<Questions[], Error, T>,
    "queryKey" | "queryFn"
  >;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<Questions[], Error, T>({
    queryKey: [QUERY_KEYS.QUESTIONS], 
    queryFn: async () => {
      const result = await getQuestions();
      return result ?? [];
    },
    ...queryOptions,
  });
};

export default useGetQuestions;
