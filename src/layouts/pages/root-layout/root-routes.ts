import { EVALUATE_EMPLOYEES_ROUTES } from "./evaluate-employees-page/evaluate-employees-routes";
import { HOME_PAGE_ROUTES } from "./home-page/home-page-routes";
import { MY_EVALUATORS_ROUTES } from "./my-evaluators-page/my-evaluators-routes";
import { PROFILE_ROUTES } from "./profile-page/profile-routes";
import { REPORTS_ROUTES } from "./reports-page/reports-page-routes";


export const ROOT_ROUTES = [...HOME_PAGE_ROUTES, ...MY_EVALUATORS_ROUTES, ...EVALUATE_EMPLOYEES_ROUTES, ...REPORTS_ROUTES, ...PROFILE_ROUTES];