import { Check } from "lucide-react"
import Text from "../text/text"
import { useTranslation } from "react-i18next"
import { Button } from "./button"
import { useNavigate, useParams } from "react-router"
import { ROOT_PATHS } from "@/layouts/pages/root-layout/root.enums"

const Success: React.FC =() => {
    const {t} = useTranslation()
    const {lang} = useParams()
    const navigate = useNavigate()
   
    return(
        <div className="flex flex-col gap-8 items-center mt-6">
            <div className="flex flex-col items-center">
            <Check className="text-green-600 w-20 h-20"/>
            <Text type="paragraph-large">{t("pages.survey.success.title")}</Text>
            </div>
            <Button onClick={() => navigate(`/${lang}/${ROOT_PATHS.EVALUATE_EMPLOYEES}`)}>{t("pages.survey.success.cta")}</Button>
        </div>
    )
}
export default Success