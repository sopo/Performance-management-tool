import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";
import { Outlet } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootLayout;
