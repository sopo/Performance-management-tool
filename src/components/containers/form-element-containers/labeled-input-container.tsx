import { PropsWithChildren } from "react";

const LabeledInputContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="text-left space-y-2">{children}</div>;
};
export default LabeledInputContainer;
