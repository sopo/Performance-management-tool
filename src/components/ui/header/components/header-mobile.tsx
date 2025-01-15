import Logo from "@/assets/Group 1.svg";
import { Menu } from "lucide-react";
import { Link } from "react-router";
const HeaderMobile: React.FC = () => {
  return (
    <div className="flex justify-between h-[80px] items-center">
      <Link to="/" className="self-center">
        <img src={Logo} className="w-8" alt="" />
      </Link>
      <Menu />
    </div>
  );
};
export default HeaderMobile;
