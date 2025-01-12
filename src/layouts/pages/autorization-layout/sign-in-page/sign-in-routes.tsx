import { Suspense } from "react";
import { SignIn } from "./sign-in-page.loader";
import { AUTH_PATHS } from "../authorization.enums";
import { Route } from "@/types/interfaces";
import { Loader } from "@/components/ui/loader";
import { Navigate } from "react-router";


export const SIGN_IN_ROUTES: Route[] = [
  {path: "",
    element: <Navigate to={AUTH_PATHS.SIGN_IN} />
  },
  {
    path: AUTH_PATHS.SIGN_IN,
    element: (
      <Suspense fallback={Loader}>
        <SignIn />
      </Suspense>
    ),
  },
];