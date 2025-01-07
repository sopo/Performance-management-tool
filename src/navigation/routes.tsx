import RootLayout from "@/layouts/pages/root-layout/root-layout";
import { ROOT_ROUTES } from "@/layouts/pages/root-layout/root-routes";
import { Navigate, createBrowserRouter } from "react-router";
import GuestGuard from "./guards/guest-guard";
import { GLOBAL_PATHS } from "./enums";
import { AUTH_ROUTES } from "@/layouts/pages/autorization-layout/auth-routes";
import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums";

export const routes = [
  { path: "/",
    element: <Navigate to={`${GLOBAL_PATHS.EN}/${ROOT_PATHS.DASHBOARD}`} />,},
  {
    path: "/:lang",
    element: (
      <GuestGuard>
        <RootLayout />
      </GuestGuard>
    ),
    children: [...ROOT_ROUTES, ...AUTH_ROUTES],
  },
  
];
export const router = createBrowserRouter(routes);
