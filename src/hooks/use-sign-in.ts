import { login } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

const useSignIn = () => {
  const mutation = useMutation({
    mutationFn: login,
  });

  return mutation;
};
export default useSignIn;