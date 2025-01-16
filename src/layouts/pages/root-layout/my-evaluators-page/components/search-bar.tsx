import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <label className="bg-gray-50 flex items-center h-12 px-4 border border-border rounded-sm">
      <Search className="w-6 h-6 text-muted-foreground" />
      <input
        type="search"
        placeholder={t("global.search")}
        className="w-full bg-transparent border-none focus:outline-none focus:border-primary"
      />
    </label>
  );
};
export default SearchBar;
