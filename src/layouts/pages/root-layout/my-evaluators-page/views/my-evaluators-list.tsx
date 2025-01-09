import { Peers } from "@/types/types"
import MyEvaluatorsListItem from "../components/my-evaluators-list-item"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
interface MyEvaluatorsListProps{
    users: Peers[]
}
const MyEvaluatorsList:React.FC<MyEvaluatorsListProps> = ({users}) => {
    const {t} = useTranslation()
    return(
        <div className="w-full flex flex-col gap-8">
            {users.map((user) => (
                <MyEvaluatorsListItem user={user} key={user.peer_id}/>
              
            ))}
            <Button>{t("pages.myEvaluators.addMorePeers")}</Button>
        </div>
    )
}
export default MyEvaluatorsList