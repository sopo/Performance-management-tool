import { Loader } from "@/components/ui/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import { Survey } from "../survey/survey.loader";
import { EvaluateEmployees } from "./evaluate-employees.loader";


export const EVALUATE_EMPLOYEES_ROUTES = [
  {
    path: ROOT_PATHS.EVALUATE_EMPLOYEES,
    children: [
    
      {
        path: "",
        element: (
          <Suspense fallback={Loader}>
            <EvaluateEmployees />
          </Suspense>
        ),
      
      },
      {
        path: `:id`,
        element: (
          <Suspense fallback={Loader}>
            <Survey />
          </Suspense>
        ),
      },
    ],
  },
];
