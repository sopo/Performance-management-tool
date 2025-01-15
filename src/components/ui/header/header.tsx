import HeaderActions from "./components/header-actions";
import HeaderMobile from "./components/header-mobile";
import HeaderNav from "./components/header-nav";

const Header: React.FC = () => {
  return (
    <div className="border-b border-gray-300 dark:border-gray-500 h-[82px] items-center bg-background ">
      <div className="max-w-screen-xl hidden lg:flex justify-between lg:mx-16 2xl:mx-auto 2xl:w-full">
        <HeaderNav />
        <HeaderActions />
      </div>
      <div className="mx-4 sm:mx-12 lg:hidden">
        <HeaderMobile />
      </div>
    </div>
  );
};
export default Header;
