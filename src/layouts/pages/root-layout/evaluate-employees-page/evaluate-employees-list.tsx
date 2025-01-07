import Screen from "@/components/containers/screen";
import Text from "@/components/text/text";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useParams } from "react-router";
import { ROOT_PATHS } from "../root.enums";
import useGetProfiles from "@/hooks/use-get-profiles";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const EvaluateEmployeesList: React.FC = () => {
  const { t } = useTranslation();
  const {lang} = useParams()
  const { data, isLoading, isError, error } = useGetProfiles();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: {error instanceof Error ? error.message : "Error"}</div>;
  }

  return (
    <Screen>
      <div className="flex flex-col gap-8">
        <Text type="title-large">{t("pages.evaluateEmployees.title")}</Text>
        <div className="flex-col gap-8 lg:gap-8">
          {data?.map((profile) => {
            return (
              <div
                key={profile.id}
                className="border-b py-6 flex items-center justify-between hover:cursor-pointer"
              >
                <div className="flex gap-4 items-center">
                <Avatar>
                  <AvatarFallback>
                    <p className="text-small text-foreground">
                      {lang === "en" ? profile.display_name_en?.[0] : profile.display_name_ka?.[0]}
                    </p>
                  </AvatarFallback>
                </Avatar>
                <Link
                  to={`/${lang}/${ROOT_PATHS.EVALUATE_EMPLOYEES}/${profile.id}`}
                  className="flex gap-2"
                >
                  {lang==="en" ?  profile.display_name_en : profile.display_name_ka }{" "}
                  <p className="text-muted-foreground">• {lang==="en" ?  profile.position_en : profile.position_ka}</p>
                </Link>
              </div>
              <p>status</p>
              </div>
            );
          })}
          <Outlet />
        </div>
      </div>
    </Screen>
  );
};
export default EvaluateEmployeesList;
