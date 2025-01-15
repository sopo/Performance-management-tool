import { Link } from "react-router";
import Logo from "@/assets/Group 1 1.svg";
import Screen from "@/components/containers/screen";
import FooterCols from "./footer-cols";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-6 my-8">
      <Screen>
        <Link to="/">
          <img src={Logo} className="w-8" alt="" />
        </Link>
        <div>
          <FooterCols />
        </div>
        <div className="flex gap-2 mt-10">
          <img src={Logo} className="w-6" />
          <p className="text-small text-secondary-foreground">
            {t("global.copyright")}
          </p>
        </div>
      </Screen>
    </div>
  );
};
export default Footer;
