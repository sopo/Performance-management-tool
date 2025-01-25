import { QUERY_KEYS } from "./enums";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getAnswers } from "@/api/get/get-answers";
import { Answer } from "@/types/types";

const useGetAnswers = ({ id }: { id: string }): UseQueryResult<Answer[]> => {
  return useQuery({
    queryKey: [QUERY_KEYS.ANSWERS, id],
    queryFn: async () => {
      const result = await getAnswers(id);
      return result;
    },
  });
};

export default useGetAnswers;
