import { Loader } from "@/components/ui/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import { Survey } from "../survey/survey.loader";
import { EvaluateEmployeesList } from "./evaluate-employees-list.loader";
import { Navigate, useParams } from "react-router";

export const EVALUATE_EMPLOYEES_ROUTES = [
  {
    path: ROOT_PATHS.EVALUATE_EMPLOYEES,
    children: [
      {
        path: "",
        element: <Navigate to="list" />, 
      },
      {
        path: ROOT_PATHS.LIST,
        element: (
          <Suspense fallback={Loader}>
            <EvaluateEmployeesList />
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
