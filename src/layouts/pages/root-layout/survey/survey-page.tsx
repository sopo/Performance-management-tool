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
import SurveyQuestion from "./components/survey-question";
import { useUpdateIsEvaluated } from "@/hooks/use-update-is-evaluated";
import useGetSelectedPeersStatus from "@/hooks/use-get-selected-peer-status";

const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const SurveyPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { data } = useGetQuestions();
  const total = data?.length || 0;
  const user = useAtomValue(UserAtom);
  const evaluatorId = user?.user.id || "";
  const [surveyCompleted, setSurveyCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});

  const { mutate } = usePostAnswers({
    onSuccess: () => {
      setSurveyCompleted(true);
      if (id) {
        updateStatus({ userId: id, peerId: evaluatorId, isEvaluated: true });
      }
    },
  });
  const { mutate: updateStatus } = useUpdateIsEvaluated();

  const {
    data: profile,
    isLoading: profileLoading,
    isError: profileError,
  } = useGetProfileWithId({
    id: id || "",
  });

  const [formError, setFormError] = useState(false);
  const onLabelClick = (questionId: number, label: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: label,
    });
  };

  const answeredAll = Object.keys(selectedAnswers).length === data?.length;
  const { data: isAlreadyEvaluated } = useGetSelectedPeersStatus({
    userId: user?.user.id || "",
    peerId: profile?.user_id || "",
  });

  const onSubmit = () => {
    if (answeredAll) {
      const payload = [];
      for (const key in selectedAnswers) {
        const value = selectedAnswers[key];
        payload.push({
          user_id: user?.user.id as string,
          peer_id: profile?.user_id as string,
          question_id: parseInt(key),
          score: value,
          is_evaluated: true,
        });
      }
      setFormError(false);
      mutate(payload);
    } else {
      setFormError(true);
    }
  };
  if (profileLoading) {
    return <div>loading</div>;
  }
  if (profileError) {
    return <div>error</div>;
  }
  return (
    <div>
      {surveyCompleted || isAlreadyEvaluated ? (
        <Success />
      ) : (
        <>
          <SurveyHead user={profile} total={total} />
          <div className="mb-6">
            {data?.map((question, index) => (
              <SurveyQuestion
                question={question}
                index={index}
                total={total}
                user={profile}
                key={index}
              >
                <SurveyVoteButtons
                  labels={labels}
                  selectedLabel={selectedAnswers[question.id]}
                  onClick={(label) => onLabelClick(question.id, label)}
                />
              </SurveyQuestion>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {formError && (
              <ErrorMessage>{t("pages.survey.error")}</ErrorMessage>
            )}
            <Button onClick={onSubmit}>{t("pages.survey.submit")}</Button>
          </div>
        </>
      )}
    </div>
  );
};
export default SurveyPage;
