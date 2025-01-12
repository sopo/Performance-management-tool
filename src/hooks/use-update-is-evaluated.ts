import { updateIsEvaluated } from "@/api/post/update-is-evaluated";
import { useMutation } from "@tanstack/react-query";


export const useUpdateIsEvaluated = () => {
  const mutation = useMutation({
    mutationFn: updateIsEvaluated, 
  
  });

  return mutation;
};
