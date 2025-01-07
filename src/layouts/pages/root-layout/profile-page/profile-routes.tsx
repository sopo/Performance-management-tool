import { Loader } from "@/components/ui/loader";
import { ROOT_PATHS } from "../root.enums";
import { Suspense } from "react";
import { Profile } from "./profile.loader";


export const PROFILE_ROUTES = [
    {
        path: ROOT_PATHS.PROFILE,
        element: (
          <Suspense fallback={Loader}>
            <Profile />
          </Suspense>
        ),
      },
]