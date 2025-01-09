import { PostAnswers } from "@/api/post-answers"
import { useMutation } from "@tanstack/react-query"

export const usePostAnswers = ({onSuccess}: {onSuccess: () => void}) => {
    const mutation = useMutation({
        mutationFn: PostAnswers,
        onSuccess: onSuccess  
    })
    return mutation
}