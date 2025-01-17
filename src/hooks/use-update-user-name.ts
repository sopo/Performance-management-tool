import { UpdateUserName } from "@/api/post/update-user-name";
import { useMutation } from "@tanstack/react-query";
type UpdateUserNamePayload = {
  display_name_en?: string;
  display_name_ka?: string;
};
export const useUpdateUserName = () => {
  const mutation = useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: string;
      payload: UpdateUserNamePayload;
    }) => UpdateUserName({ id, payload }),
  });
  return mutation;
};
