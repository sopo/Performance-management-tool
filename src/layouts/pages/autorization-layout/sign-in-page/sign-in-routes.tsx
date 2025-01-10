import { Suspense } from "react";
import { SignIn } from "./sign-in-page.loader";
import { AUTH_PATHS } from "../authorization.enums";
import { Route } from "@/types/interfaces";
import { Loader } from "@/components/ui/loader";


export const SIGN_IN_ROUTES: Route[] = [
  {
    path: AUTH_PATHS.SIGN_IN,
    element: (
      <Suspense fallback={Loader}>
        <SignIn />
      </Suspense>
    ),
  },
];