import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Peers } from "@/types/types";
import { Trash2 } from "lucide-react";
import { useParams } from "react-router";

export interface UserListItemProps {
  user: Peers
}
const MyEvaluatorsListItem:React.FC<UserListItemProps>  = ({user}) => {
const {lang} = useParams()
    return(
      <div className="border-b py-6 flex items-center justify-between">
        <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarFallback>
            <p className="text-small text-foreground">
              {lang === "en" ?  user.peer_display_name_en?.[0] : user.peer_display_name_ka?.[0] }
            </p>
          </AvatarFallback>
        </Avatar>
        <div className="flex gap-2">
          <p>{lang === "en" ?  user.peer_display_name_en : user.peer_display_name_ka}</p>
          <p className="text-muted-foreground">•</p>
          <p className="text-muted-foreground">{lang === "en" ? user.peer_position_en : user.peer_position_ka}</p>
          </div>
      </div>
      <Trash2 className="text-muted-foreground w-6 h-6 hover:cursor-pointer"/>
      </div>
    )
}
export default MyEvaluatorsListItem