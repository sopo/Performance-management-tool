import { useMutation } from "@tanstack/react-query";
import { deleteUser } from "@/api/post/delete-user";

export const useDeleteUser = () => {
  return useMutation<void, Error, number>({
    mutationFn: async (id: number) => {
      await deleteUser(id);
    },
    onError: (error) => {
      console.error("Error deleting user:", error.message);
    },
    onSuccess: () => {
      console.log("User successfully deleted");
    },
  });
};
