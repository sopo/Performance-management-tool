import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { EditNameForm, EditNameShema } from "./edit-name-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormContainer from "@/components/containers/form-element-containers/form-container";
import { Input } from "@/components/ui/input";
import { useUpdateUserName } from "@/hooks/use-update-user-name";
import { useAtomValue } from "jotai";
import { ProfileAtom, UserAtom } from "@/store/auth";
import ErrorMessage from "@/components/ui/error-message";

const EditUserNameForm: React.FC = () => {
  const user = useAtomValue(UserAtom);
  const profile = useAtomValue(ProfileAtom)
  const id = user?.user.id || "";
  const { t } = useTranslation();
  const defaultValues = {
    userNameEn: profile?.display_name_en || "", 
    userNameKa: profile?.display_name_ka || "", 
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditNameForm>({
    resolver: zodResolver(EditNameShema),
    defaultValues
  });

  const { mutate: handleNameChange } = useUpdateUserName();

  const userNameEn = register("userNameEn", { required: true });
  const userNameKa = register("userNameKa", { required: true });

  const onSubmit = (data: EditNameForm) => {
    const payload = {
      display_name_en: data.userNameEn,
      display_name_ka: data.userNameKa,
    };

    handleNameChange({ id, payload });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit2 className="text-muted-foreground" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("pages.editName.title")}</DialogTitle>
        </DialogHeader>

        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Input
                {...userNameEn}
                type="text"
                id="userNameEn"
                placeholder={t("pages.editName.userNameEn")}
              />
              {errors.userNameEn && (
                <ErrorMessage>
                  {t(`pages.editName.${errors.userNameEn.message}`)}
                </ErrorMessage>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Input
                {...userNameKa}
                type="text"
                id="userNameKa"
                placeholder={t("pages.editName.userNameKa")}
              />
              {errors.userNameKa && (
                <ErrorMessage>
                  {t(`pages.editName.${errors.userNameKa.message}`)}
                </ErrorMessage>
              )}
            </div>

            <Button
              variant={"default"}
              className="inline-flex items-center justify-center w-full"
              type="submit"
            >
              {t("pages.editName.title")}
            </Button>
          </div>
        </FormContainer>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserNameForm;
