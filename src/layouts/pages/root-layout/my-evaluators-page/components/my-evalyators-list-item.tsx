import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Profile } from "@/types/types";
import { useParams } from "react-router";

export interface UserListItemProps {
  user: Profile
  isChecked: boolean; 
  handleCheckboxChange: (checked: boolean) => void; 
}
const ChooseEmployeesListItem:React.FC<UserListItemProps>  = ({user, isChecked, handleCheckboxChange}) => {
const {lang} = useParams()
    return(
      <label htmlFor={`checkbox-${user.id}`} key={user.id} className="border-b py-6 flex items-center justify-between hover:cursor-pointer">
    
        <div className="flex gap-4 items-center">
       
        <Avatar>
          <AvatarFallback>
            <p className="text-small text-foreground">
              {lang === "en" ?  user.display_name_en?.[0] : user.display_name_ka?.[0] }
            </p>
          </AvatarFallback>
        </Avatar>
        <div className="flex gap-2">
          <p>{lang === "en" ?  user.display_name_en : user.display_name_ka}</p>
          <p className="text-muted-foreground">•</p>
          <p className="text-muted-foreground">{lang === "en" ? user.position_en : user.position_ka}</p>
          </div>
      </div>
      <Checkbox id={`checkbox-${user.id}`} 
          checked={isChecked} 
          onCheckedChange={handleCheckboxChange} />
      </label>
    )
}
export default ChooseEmployeesListItem