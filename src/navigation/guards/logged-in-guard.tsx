import { PropsWithChildren } from "react";
import { useAtomValue } from "jotai";
import { UserAtom } from "@/store/auth";
import { Navigate, Outlet, useParams } from "react-router";
import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";
const LoggedInGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const user = useAtomValue(UserAtom);
  const { lang } = useParams();
  if (user) {
    return <Navigate to={`/${lang}/${ROOT_PATHS.DASHBOARD}`} />;
  }
  return <>{children || <Outlet />}</>;
};
export default LoggedInGuard;
