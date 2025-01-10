import Footer from "@/components/ui/footer/footer";
import Header from "@/components/ui/header/header";
import { Outlet } from "react-router";
import Screen from "@/components/containers/screen";
const RootLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Screen>
        <Outlet />
      </Screen>
      <Footer />
    </div>
  );
};
export default RootLayout;
