import { Trans } from "react-i18next";

interface UserInfoCardItemProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}
const UserInfoCardItem: React.FC<UserInfoCardItemProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col items-start gap-4  sm:flex-row sm:justify-between sm:items-center border-b border-border py-8 ">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-muted-foreground font-semibold uppercase">
          <Trans>{title}</Trans>
        </p>
        <p className="text-lg text-foreground">{description}</p>
      </div>
      {children}
    </div>
  );
};
export default UserInfoCardItem;
