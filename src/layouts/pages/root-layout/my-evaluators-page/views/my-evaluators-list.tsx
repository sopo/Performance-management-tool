import { Peers } from "@/types/types"
import MyEvaluatorsListItem from "../components/my-evaluators-list-item"
interface MyEvaluatorsListProps{
    users: Peers[]
}
const MyEvaluatorsList:React.FC<MyEvaluatorsListProps> = ({users}) => {
    return(
        <div className="w-full">
            {users.map((user) => (
                <MyEvaluatorsListItem user={user}/>
              
            ))}
        </div>
    )
}
export default MyEvaluatorsList