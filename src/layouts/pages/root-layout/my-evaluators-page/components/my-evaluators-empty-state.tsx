import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { t } from "i18next"
import { UsersRound, CalendarFold, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router"
import { ROOT_PATHS } from "../../root.enums"

const EmptyState:React.FC = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
       navigate(`${ROOT_PATHS.CHOOSE_EMPLOYEES}`)
    }
    return(
        <Card className="flex-1 bg-gray-50">
        <CardHeader>
          <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-normal text-muted-foreground">{t("message.noPeers")}</CardTitle>
          <UsersRound className="text-muted-foreground w-5 h-5" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 ">
          <div className="flex gap-2 items-center pb-4 ">
          <CalendarFold className="text-muted-foreground w-5 h-5"/>
          <p className="text-muted-foreground text-sm">{t("message.deadline")}</p>
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <Button onClick={handleNavigate}><ArrowRight />{t("global.chooseEvaluators")}</Button>

        </CardFooter>
      </Card>
    )
}
export default EmptyState