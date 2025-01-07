import { Outlet } from "react-router";
import Screen from "@/components/containers/screen";
const EvaluateEmployeesLayout: React.FC = () => {
  return (
    <Screen>
    <Outlet />
    </Screen>
  );
};
export default EvaluateEmployeesLayout;
