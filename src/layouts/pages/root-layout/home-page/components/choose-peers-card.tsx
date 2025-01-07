import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { t } from "i18next"
import { UsersRound, CalendarFold, ArrowRight } from "lucide-react"

const ChoosePeersCard:React.FC = () => {
    return(
        <Card className="flex-1">
        <CardHeader>
          <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-normal">{t("global.myEvaluators")}</CardTitle>
          <UsersRound className="text-muted-foreground w-5 h-5" />
          </div>
          <CardDescription>{t("global.chooseEvaluators")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 ">
          <p  className="border-t pt-4 text-foreground text-md">{t("message.noPeers")}</p>
          <div className="flex gap-2 items-center border-b pb-4 ">
          <CalendarFold className="text-muted-foreground w-5 h-5"/>
          <p className="text-muted-foreground text-sm">{t("message.deadline")}</p>
          </div>
        </CardContent>
        <CardFooter className="w-full">
          <Button className="w-full"><ArrowRight />{t("global.chooseEvaluators")}</Button>
        </CardFooter>
      </Card>
    )
}
export default ChoosePeersCard