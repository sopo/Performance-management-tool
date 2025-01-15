import { login } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

const useSignIn = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: onSuccess,
  });

  return mutation;
};
export default useSignIn;
