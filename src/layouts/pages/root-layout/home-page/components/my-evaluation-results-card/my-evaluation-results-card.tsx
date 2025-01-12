import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { t } from "i18next"
import { ArrowRight, ChartPie } from "lucide-react"
import { useNavigate, useParams } from "react-router"
import { ROOT_PATHS } from "../../../root.enums"
import { UserAtom } from "@/store/auth"
import { useAtomValue } from "jotai"
import useGetPeersToEvaluate from "@/hooks/use-get-peers-to-evaluate"
import FilledCardContent from "./filled-card-content"
import CardEmptyState from "./card-empty-state"

const MyEvaluationResultsCard:React.FC = () => {
  const navigate=useNavigate();
  const {lang} = useParams()
  const onClick =() => {
    navigate(`/${lang}/${ROOT_PATHS.REPORTS}`)
  }
  const user = useAtomValue(UserAtom)
  const userId = user?.user.id || ""
  const {data} = useGetPeersToEvaluate({id: userId})
  console.log("datakjkjf", data)
    return(
        <Card className="flex-1">
        <CardHeader>
          <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-normal">{t("pages.reports.title")}</CardTitle>
          <ChartPie className="text-muted-foreground w-5 h-5" />
          </div>
          <CardDescription>{t("pages.reports.description")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 ">
          {data && data.length > 0 ?  <FilledCardContent /> : <CardEmptyState />}  
        </CardContent>
        <CardFooter className="w-full">
          <Button onClick={onClick} className="w-full"><ArrowRight />{data && data.length > 0 ? t("pages.reports.title") :t("global.evaluateEmployees")}</Button>
        </CardFooter>
      </Card>
    )
}
export default MyEvaluationResultsCard