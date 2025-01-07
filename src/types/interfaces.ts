export interface AuthProps{
    email: string;
    password: string;
}

export interface Route {
    path: string;
    element: React.ReactNode;
  }

 export interface SurveyVoteButtonProps {
    labels: number[];
    onClick: (label: number) => void
    selectedLabel: number | null
  }