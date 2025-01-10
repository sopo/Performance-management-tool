import { Loader } from "@/components/ui/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import { Survey } from "../survey/survey.loader";
import { EvaluateEmployees } from "./evaluate-employees.loader";
import { Navigate} from "react-router";

export const EVALUATE_EMPLOYEES_ROUTES = [
  {
    path: ROOT_PATHS.EVALUATE_EMPLOYEES,
    children: [
      {
        path: "",
        element: <Navigate to={ROOT_PATHS.LIST} />, 
      },
      {
        path: ROOT_PATHS.LIST,
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
