import { Loader } from "@/components/ui/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import { Survey } from "../survey/survey.loader";
import { EvaluateEmployeesList } from "./evaluate-employees-list.loader";
import { Navigate } from "react-router";
import { EvaluateEmployeesLayout } from "./evaluate-employees-layout.loader";
import { GLOBAL_PATHS } from "@/navigation/enums";

export const EVALUATE_EMPLOYEES_ROUTES = [
  {
    path: ROOT_PATHS.EVALUATE_EMPLOYEES,
    element: (
      <EvaluateEmployeesLayout />
    ),
    children: [
      {
        path: `:id`,
        element: (
          <Suspense fallback={Loader}>
            <Survey />
          </Suspense>
        ),
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
        path: "",
        element: <Navigate to={`/${GLOBAL_PATHS.EN}/${ROOT_PATHS.EVALUATE_EMPLOYEES}/${ROOT_PATHS.LIST}`} />,
      },
    ],
  },
];
