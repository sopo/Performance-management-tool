import ChooseEmployeesListItem from "../components/choose-employees-list-item"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { PeerInsert, Profile} from "@/types/types"
import { usePostProfiles } from "@/hooks/use-post-profile"
import { Button } from "@/components/ui/button"
import { ProfileAtom } from "@/store/auth"
import { useAtomValue } from "jotai"
import { mapPeerData } from "@/utils/map-users-list"
import { useNavigate, useParams } from "react-router"
import { ROOT_PATHS } from "../../root.enums"
import useGetAvailablePeersProfiles from "@/hooks/use-get-available-peers-profiles"

const ChooseEmployees:React.FC = () => {
    const user = useAtomValue(ProfileAtom)
    const{t} = useTranslation()
    const userId = user?.user_id || ""
    const{data, isLoading, isError} = useGetAvailablePeersProfiles({id: userId})
    const [selectedProfiles, setSelectedProfiles] = useState<PeerInsert[]>([])
    const {mutate, isSuccess} = usePostProfiles()
    const {lang} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
       if( isSuccess ){
       navigate(`/${lang}/${ROOT_PATHS.MY_EVALUATORS}`)
       } 
      
    }, [isSuccess, lang, navigate])
  
    
    if(isLoading){
        return <div>{t("global.loading")}</div>
    }
    if(isError){
        return <div>error</div>
    }

    const handleSelect = (profile: PeerInsert) => {
        setSelectedProfiles((prev) => {
          if (!prev.some((p) => p.id === profile.id)) {
            return [...prev, profile];
          }
          return prev;
        });
      };
  
    const onSubmit = () => {
        const payload = mapPeerData(user as Profile, selectedProfiles as Profile[])
        mutate(payload)
    }
    return(
        <div className="flex flex-col gap-8">
            <div>
            {data?.map((user) => {
                return <ChooseEmployeesListItem user={user} onChange={handleSelect} key={user.id}/>
            })}
            </div>
            <Button onClick={onSubmit}>{t("pages.chooseEvaluators.title")}</Button>
        </div>
    )
}
export default ChooseEmployees