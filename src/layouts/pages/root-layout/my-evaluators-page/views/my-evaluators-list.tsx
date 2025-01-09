import { Peers } from "@/types/types"
import MyEvaluatorsListItem from "../components/my-evaluators-list-item"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"
import { ROOT_PATHS } from "../../root.enums"
interface MyEvaluatorsListProps{
    users: Peers[]
}
const MyEvaluatorsList:React.FC<MyEvaluatorsListProps> = ({users}) => {
    const {t} = useTranslation()
    const navigate = useNavigate()
    const onClick = () => {
        navigate(ROOT_PATHS.CHOOSE_EMPLOYEES)
    }
    return(
        <div className="w-full flex flex-col gap-8">
            <div>
            {users.map((user) => (
                <MyEvaluatorsListItem peer={user} key={user.peer_id}/>
            ))}
            </div>
            <Button onClick={onClick}>{t("pages.myEvaluators.addMorePeers")}</Button>
        </div>
    )
}
export default MyEvaluatorsList