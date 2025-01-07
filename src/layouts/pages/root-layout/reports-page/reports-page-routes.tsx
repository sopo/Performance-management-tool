import { Loader } from "@/components/ui/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import { Reports } from "./reports-page.loader";


export const REPORTS_ROUTES = [
    {
        path: ROOT_PATHS.REPORTS,
        element: (
          <Suspense fallback={Loader}>
            <Reports />
          </Suspense>
        ),
      },
]