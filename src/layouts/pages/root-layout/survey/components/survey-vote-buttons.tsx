import { SurveyVoteButtonProps } from "@/types/interfaces";

const SurveyVoteButtons: React.FC<SurveyVoteButtonProps> = ({ labels, selectedLabel, onClick }) => {

  return (
    <div className="flex gap-4">
      {labels.map((label) => (
        <div
          key={label}
          className={`w-16 h-12 rounded flex items-center justify-center text-sm font-medium cursor-pointer ${
            selectedLabel === label
              ? "bg-primary text-white" 
              : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
          }`}
          onClick={() => onClick(label)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default SurveyVoteButtons;
