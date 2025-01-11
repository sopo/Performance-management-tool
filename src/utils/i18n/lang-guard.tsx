import { Outlet, useNavigate, useParams, useLocation } from "react-router";
import { useEffect } from "react";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./config";


const LanguageGuard: React.FC = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!SUPPORTED_LANGUAGES.includes(lang || "")) {
      const newPath = location.pathname.replace(`/${lang}`, `/${DEFAULT_LANGUAGE}`);
      navigate(newPath, { replace: true }); 
    }
  }, [lang, navigate, location]);

  return <Outlet />;
};

export default LanguageGuard;
