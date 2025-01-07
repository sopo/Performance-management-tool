import { User } from "@supabase/supabase-js";
import { QUERY_KEYS } from "./enums";
import { getUsers } from "@/api/get-users";
import { UseQueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";

const useGetUsers = <T = User[]>({
  queryOptions,
}: {
  queryOptions?: Omit<
    UseQueryOptions<User[], Error, T>,
    "queryKey" | "queryFn"
  >;
} = {}): UseQueryResult<T, Error> => {
  return useQuery<User[], Error, T>({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: async () => {
      const result = await getUsers();
      return result ?? [];
    },
    ...queryOptions,
  });
};
export default useGetUsers;