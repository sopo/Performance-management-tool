import { Suspense } from "react";
import { ROOT_PATHS } from "../root.enums";
import { HomePage } from "./home-page-loader";
import Loader from "@/components/ui/loader";

export const HOME_PAGE_ROUTES = [
  {
    path: ROOT_PATHS.DASHBOARD,
    element: (
      <Suspense fallback={<Loader />}>
        <HomePage />
      </Suspense>
    ),
  },
];
