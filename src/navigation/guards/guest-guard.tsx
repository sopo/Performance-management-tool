import { PropsWithChildren } from "react";

import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import { Navigate, Outlet } from "react-router";
import { AUTH_PATHS } from "@/layouts/pages/autorization-layout/authorization.enums";


const GuestGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(UserAtom);
  if (!user) {
    return <Navigate to={`${AUTH_PATHS.SIGN_IN}`} />;
  }
  return <>{children || <Outlet />}</>;
};
export default GuestGuard;