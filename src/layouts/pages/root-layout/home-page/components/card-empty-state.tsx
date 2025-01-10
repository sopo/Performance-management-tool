import { CalendarFold } from "lucide-react"
import { useTranslation } from "react-i18next"

const CardEmptyState:React.FC =() => {
    const {t} = useTranslation()
    return(
        <>
          <p  className="border-t border-border pt-4 text-foreground text-md">{t("message.noPeers")}</p>
          <div className="flex gap-2 items-center border-b border-border pb-4 ">

          <CalendarFold className="text-muted-foreground w-5 h-5"/>
          <p className="text-muted-foreground text-sm">{t("message.deadline")}</p>
          </div>
        </>
    )
}
export default CardEmptyState