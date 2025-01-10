import Screen from "@/components/containers/screen"
import { Outlet } from "react-router"
const PageLayout:React.FC =() => {
    return(
        <Screen>
            <Outlet />
        </Screen>
    )
}
export default PageLayout