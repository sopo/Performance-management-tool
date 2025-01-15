import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default AuthLayout;
