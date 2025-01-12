import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { useTranslation } from "react-i18next";

  import { Earth } from "lucide-react";
import { useNavigate } from "react-router";
  const LangToggle: React.FC = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const handleLanguageChange = (language: string) => {
      i18n.changeLanguage(language);
      const currentPath = window.location.pathname;
      const pathSegments = currentPath.split("/");
      if (pathSegments.length > 1) {
        pathSegments[1] = language;
      }
      navigate(pathSegments.join("/"));
    };
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="p-2 rounded-full cursor-pointer">
            <Earth className="h-[1.2rem] w-[1.2rem] text-icon-primary" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleLanguageChange("en")}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange("ka")}>
            ქართული
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  export default LangToggle;