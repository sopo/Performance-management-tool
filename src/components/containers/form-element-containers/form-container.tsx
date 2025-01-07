import { PropsWithChildren } from "react";
interface FormContainerProps extends PropsWithChildren {
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const FormContainer: React.FC<FormContainerProps> = ({
  children,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit} className="">
      {children}
    </form>
  );
};
export default FormContainer;