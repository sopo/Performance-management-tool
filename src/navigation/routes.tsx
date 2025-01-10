import RootLayout from "@/layouts/pages/root-layout/root-layout";
import { ROOT_ROUTES } from "@/layouts/pages/root-layout/root-routes";
import { Navigate, createBrowserRouter } from "react-router";
import GuestGuard from "./guards/guest-guard";
import { GLOBAL_PATHS } from "./enums";
import { AUTH_ROUTES } from "@/layouts/pages/autorization-layout/auth-routes";
import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";
import LoggedInGuard from "./guards/logged-in-guard";
import AuthLayout from "@/layouts/pages/autorization-layout/auth-layout";
import { AUTH_PATHS } from "@/layouts/pages/autorization-layout/authorization.enums";

export const routes = [
  {
    path: "/",
    element: <Navigate to={`${GLOBAL_PATHS.EN}/${ROOT_PATHS.DASHBOARD}`} />,
  },
  {
    path: "/:lang",
    children: [
      {
        path: "", 
        element: (
          <GuestGuard>
            <RootLayout />
          </GuestGuard>
        ),
        children: [...ROOT_ROUTES], 
      },
      {
        path: AUTH_PATHS.AUTH, 
        element: (
          <LoggedInGuard>
            <AuthLayout />
          </LoggedInGuard>
        ),
        children: [...AUTH_ROUTES], 
      },
    ],
  }
];

export const router = createBrowserRouter(routes);
