import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect } from "react";
import qs from "qs";

const SearchBar: React.FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedQueryParams = qs.parse(searchParams.toString());
  const searchQuery =
    typeof parsedQueryParams.search === "string"
      ? parsedQueryParams.search
      : "";

  const { register, watch } = useForm({
    defaultValues: {
      search: searchQuery,
    },
  });
  const search = register("search");
  const enteredText = watch("search");
  const debouncedSearch = useDebounce(enteredText);

  useEffect(() => {
    if (debouncedSearch.length > 0) {
      const newQueryParams = { search: debouncedSearch };
      const serializedParams = qs.stringify(newQueryParams, {
        skipNulls: true,
      });
      setSearchParams(serializedParams);
    } else {
      setSearchParams({});
    }
  }, [debouncedSearch, setSearchParams]);
  return (
    <div className="relative">
      <Input {...search} placeholder={t("global.search")} className="pl-8" />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    </div>
  );
};
export default SearchBar;
