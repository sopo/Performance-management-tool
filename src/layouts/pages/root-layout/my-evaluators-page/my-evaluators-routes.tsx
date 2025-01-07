import { Loader } from "@/components/ui/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import {MyEvaluators} from "./my-evaluators-loader";

export const MY_EVALUATORS_ROUTES = [
    {
        path: ROOT_PATHS.MY_EVALUATORS,
        element: (
          <Suspense fallback={Loader}>
            <MyEvaluators />
          </Suspense>
        ),
      },
]