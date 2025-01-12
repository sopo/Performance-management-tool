import useGetQuestions from "@/hooks/use-get-questions";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";
import SurveyVoteButtons from "./components/survey-vote-buttons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ErrorMessage from "@/components/ui/error-message";
import useGetProfileWithId from "@/hooks/use-get-profile-with-id";
import { UserAtom } from "@/store/auth";
import { useAtomValue } from "jotai";
import { usePostAnswers } from "@/hooks/use-post-answers";
import Success from "@/components/ui/success";
import SurveyHead from "./components/survey-head";

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const SurveyPage:React.FC = () => {
    const {t} = useTranslation()
    const {lang} = useParams()
    const { id } = useParams<{ id: string }>(); 
    const { data } = useGetQuestions();
    const total = data?.length || 0
    const user = useAtomValue(UserAtom)
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
    const {mutate} =  usePostAnswers({onSuccess: () => {
        alert("added")
    }})
    const { data: profile, isLoading: profileLoading, isError: profileError } = useGetProfileWithId({
        id: id || ""
      });
      
    const [formError, setFormError] = useState(false)
    const onLabelClick = ( questionId: number, label: number,) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: label
        })
    }
    
    const answeredAll = Object.keys(selectedAnswers).length === data?.length
    const onSubmit = () => {
       if(answeredAll){
        const payload = []
        for(const key in selectedAnswers){
            const value = selectedAnswers[key]
            payload.push({
                user_id: user?.user.id as string,
                peer_id: profile?.user_id as string,
                question_id: parseInt(key),
                score: value
            })

        }

        setFormError(false)

        mutate(payload)
       }else{
        setFormError(true)
       }
    }
    if(profileLoading){
        return <div>loading</div>
    }
    if(profileError){
        return <div>error</div>
    }
    return (
    <div>
        <Success />
        {/* <p className="text-3xl">{`${t("pages.survey.evaluate")} ${lang === "en" ? profile?.display_name_en : profile?.display_name_ka}`}</p>
        <p className="text-md text-muted-foreground border-b border-border pb-6">{t("pages.survey.total")} {total}</p> */}
        <SurveyHead user={profile} total={total}/>
        <div className="mb-6">
        {data?.map((question, index) => (
            <div  key={question.id} className="flex flex-col gap-8 border-b py-16">
            <div>
            <p className="text-sm text-muted-foreground">{lang === "en" ? question.category_en : question.category_ka}: {t("pages.survey.question")} {index +1} / {total}</p>
            <p className="text-2xl">{lang === "en" ? profile?.display_name_en : profile?.display_name_ka} {lang==="en" ? question.title_en : question.title_ka}</p>
            </div>
            <SurveyVoteButtons labels={labels} selectedLabel={selectedAnswers[question.id]} onClick={(label) => onLabelClick(question.id, label)}/>
            </div>
        ))}
        </div>
        <div className="flex flex-col gap-4">
        {formError && <ErrorMessage>{t("pages.survey.error")}</ErrorMessage>}
        <Button onClick={onSubmit}>{t("pages.survey.submit")}</Button>
        </div>
        </div>
        
    );
 
}
export default SurveyPage