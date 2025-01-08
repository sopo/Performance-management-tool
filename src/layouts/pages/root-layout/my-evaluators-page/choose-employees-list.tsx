import useGetProfiles from "@/hooks/use-get-profiles"
import ChooseEmployeesListItem from "./components/my-evalyators-list-item"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"
import { Peers, Profile} from "@/types/types"
import { usePostProfiles } from "@/hooks/use-post-profile"
import { Button } from "@/components/ui/button"
import { ProfileAtom } from "@/store/auth"
import { useAtomValue } from "jotai"
import { mapPeerData } from "@/utils/map-users-list"

const ChooseEmployeesList:React.FC = () => {
    const{t} = useTranslation()
    const{data, isLoading, isError} = useGetProfiles()
    const [selectedProfiles, setSelectedProfiles] = useState<Peers[]>([])
    const {mutate, isSuccess} = usePostProfiles()
    useEffect(() => {
       if( isSuccess ){
        
        console.log("executed")
       } 
      
    }, [isSuccess])
    const user = useAtomValue(ProfileAtom)

    
    if(isLoading){
        return <div>{t("global.loading")}</div>
    }
    if(isError){
        return <div>error</div>
    }

    const handleSelect = (profile: Peers) => {
        setSelectedProfiles((prev) => {
          if (!prev.some((p) => p.id === profile.id)) {
            return [...prev, profile];
          }
          return prev;
        });
      };
    console.log("userTopass", user)
  
    const onSubmit = () => {
        const payload = mapPeerData(user as Profile, selectedProfiles as Profile[])
        mutate(payload)
    }
    console.log(data)
    return(
        <div>
            {data?.map((user) => {
                return <ChooseEmployeesListItem user={user} onChange={handleSelect} key={user.id}/>
            })}
            <Button onClick={onSubmit}>{t("pages.chooseEvaluators.title")}</Button>
        </div>
    )
}
export default ChooseEmployeesList