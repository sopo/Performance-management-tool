import { QUERY_KEYS } from "./enums";
import { useQuery } from "@tanstack/react-query";
import { getAnswers } from "@/api/get/get-answers";

const useGetAnswers = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [QUERY_KEYS.ANSWERS, id],
    queryFn: async () => {
      const result = await getAnswers(id);
      return result;
    },
  });
};

export default useGetAnswers;
