import { logout } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

const useLogOut = (onSuccess: () => void) => {
  const mutation = useMutation({
    mutationFn: logout,
    onSuccess,
  });

  return mutation;
};
export default useLogOut;
