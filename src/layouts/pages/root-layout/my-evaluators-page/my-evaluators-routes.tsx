import { Loader } from "@/components/ui/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import {MyEvaluators} from "./my-evaluators-loader";
import ChooseEmployeesList from "./choose-employees-list";
import MyEvaluatorsLayout from "./components/my-evaluators-layout";

export const MY_EVALUATORS_ROUTES = [
    {
        path: ROOT_PATHS.MY_EVALUATORS,
        element: (
          <Suspense fallback={Loader}>
            <MyEvaluatorsLayout />
          </Suspense>
        ),
        children: [
          {
          path: "",
          element: (
            <Suspense fallback={Loader}>
              <MyEvaluators />
            </Suspense>
        )},
          {path: ROOT_PATHS.CHOOSE_EMPLOYEES,
          element:(
            <Suspense fallback={Loader}>
            <ChooseEmployeesList />
          </Suspense>
          )},
          
        ]
      },
]