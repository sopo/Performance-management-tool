import { PostProfiles } from "@/api/post/post-profiles";
import { useMutation } from "@tanstack/react-query";

export const usePostProfiles = () => {
  const mutation = useMutation({
    mutationFn: PostProfiles,
  });
  return mutation;
};
