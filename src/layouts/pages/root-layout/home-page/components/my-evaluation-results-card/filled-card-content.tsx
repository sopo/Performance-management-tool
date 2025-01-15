import { CalendarFold } from "lucide-react"
import { useTranslation } from "react-i18next"

const FilledCardContent:React.FC =() => {
    const {t} = useTranslation()
    return(
        <>
          <p  className="border-t border-border pt-4 text-foreground text-md">{t("pages.reports.filledState.title")} </p>
          <div className="flex flex-col gap-2 border-b border-border pb-4 "></div>
          <div className="flex flex-col gap-2 border-b border-border pb-4 ">
          <p className="text-muted-foreground text-sm">{t("pages.reports.filledState.note")}</p>
          <div className="flex gap-2">
          <CalendarFold className="text-muted-foreground w-5 h-5"/>
          <p className="text-muted-foreground text-sm">{t("message.deadline")}</p>
          </div>
          
          </div>
        </>
    )
}
export default FilledCardContent