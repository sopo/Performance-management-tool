import { User } from "@supabase/supabase-js";

export const mapUsersList = (users: User[]) => {
  console.log("users", users)
  return users?.map((user) => ({
    email: user?.email,
    key: user?.id ?? Math.random().toString(36).slice(2, 11),
    app_metadata: user?.app_metadata ?? {},
    user_metadata: user?.user_metadata ?? {},
    aud: user?.aud ?? "",
    fullName: user?.user_metadata.displayName

  }));
};