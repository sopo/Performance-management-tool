import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ProfileAtom } from "@/store/auth"
import { useAtomValue } from "jotai"
import { useParams } from "react-router"


const UserProfileCard:React.FC=() => {

    const {lang} = useParams() 
    const user = useAtomValue(ProfileAtom)
 
    return(
        <div className="flex gap-4 items-center">
        <Avatar className="w-20 h-20">
          <AvatarFallback className="text-xl text-foreground ">
            {lang === "en"
              ? user?.display_name_en?.[0]
              : user?.display_name_ka?.[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
        <p className="text-2xl text-foreground font-semibold">{lang === "en" ? user?.display_name_en : user?.display_name_ka}</p>
        <p className="text-lg text-muted-foreground"> {lang === "en" ? user?.position_en : user?.position_ka}</p>
        </div>
        </div>
    )
}
export default UserProfileCard