import { SignIn } from "@/layouts/pages/autorization-layout/sign-in-page/sign-in-page.loader";
import RootLayout from "@/layouts/pages/root-layout/root-layout";
import { ROOT_ROUTES } from "@/layouts/pages/root-layout/root-routes";
import { createBrowserRouter } from "react-router";
import GuestGuard from "./guards/guest-guard";
import { AUTH_PATHS } from "@/layouts/pages/autorization-layout/authorization.enums";
import LoggedInGuard from "./guards/logged-in-guard";

export const routes = [
  {
    path: "/",
    element: (
      <GuestGuard>
        <RootLayout />
      </GuestGuard>
    ),
    children: [...ROOT_ROUTES],
  },
  {
    path: AUTH_PATHS.SIGN_IN,
    element: (
    <LoggedInGuard>
    <SignIn />
    </LoggedInGuard>),
  },
];
export const router = createBrowserRouter(routes);
