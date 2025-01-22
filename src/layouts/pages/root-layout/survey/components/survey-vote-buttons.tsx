import { SurveyVoteButtonProps } from "@/types/interfaces";

const SurveyVoteButtons: React.FC<SurveyVoteButtonProps> = ({
  labels,
  selectedLabel,
  onClick,
}) => {
  return (
    <div className="flex gap-1 sm:gap-4">
      {labels.map((label) => (
        <div
          key={label}
          className={`w-10 h-8 sm:w-16 sm:h-12 rounded flex items-center justify-center text-sm font-medium cursor-pointer ${
            selectedLabel === label
              ? "bg-primary text-white"
              : "bg-gray-100 dark:bg-gray-800 text-muted-foreground hover:bg-gray-200 dark:hover:bg-gray-700"
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
