import { PropsWithChildren } from "react";

const ErrorMessage:React.FC<PropsWithChildren> = ({children}) => {
    return(
        <p className="text-sm text-red-500">{children}</p>
    )
}
export default ErrorMessage