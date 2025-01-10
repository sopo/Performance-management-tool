import Screen from "@/components/containers/screen"
import { Outlet } from "react-router"
const MyEvaluatorsLayout:React.FC =() => {
    return(
        <Screen>
            <Outlet />
        </Screen>
    )
}
export default MyEvaluatorsLayout