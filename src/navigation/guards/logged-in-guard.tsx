import { PropsWithChildren } from "react";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import { Navigate, Outlet } from "react-router";
import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";
const LoggedInGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(UserAtom);
  if (user) {
    return <Navigate to={ROOT_PATHS.HOME} />;
  }
  return <>{children || <Outlet />}</>;
};
export default LoggedInGuard;