import useSignIn from "@/hooks/use-sign-in";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import Screen from "@/components/containers/screen";
import Text from "@/components/text/text";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormContainer from "@/components/containers/form-element-containers/form-container";
import { SignInForm, signInShema } from "./sign-in-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/components/ui/error-message";
import { ROOT_PATHS } from "../../root-layout/root.enums";
import { useEffect } from "react";

const SignInPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInShema),
  });
  const { t } = useTranslation();
  const {lang} = useParams()
  const navigate = useNavigate();
  const {
    mutate: handleLogin,
    isError,
    error,
    isSuccess
  } = useSignIn();
useEffect(() => {
  if(isSuccess){
      navigate(`/${lang}/${ROOT_PATHS.DASHBOARD}`)
  }
}, [isSuccess, lang, navigate])

  const email = register("email", {
    required: true,
  });
  const password = register("password", {
    required: true,
  });

  return (
    <div className="bg-gray-50 dark:bg-gray-800 h-screen overflow-hidden">
      <Screen size="md">
        <Card>
          <CardHeader>
            <CardTitle>
              <Text type="title-large">{t("pages.signIn.title")}</Text>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FormContainer
              onSubmit={handleSubmit((data) => {
                handleLogin(data);
              })}
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <Input
                    {...email}
                    type="email"
                    id="email"
                    placeholder={t("pages.signIn.email")}
                  />
                  {errors.email && (
                    <ErrorMessage>
                      {t(`pages.signIn.${errors.email.message}`)}
                    </ErrorMessage>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <Input
                    {...password}
                    type="password"
                    id="password"
                    placeholder={t("pages.signIn.password")}
                  />
                  {errors.password && (
                    <ErrorMessage>
                      {t(`pages.signIn.${errors.password.message}`)}
                    </ErrorMessage>
                  )}
                </div>
                {isError && error instanceof Error && (
                  <ErrorMessage>
                    {t("pages.signIn.invalidCredentials")}
                  </ErrorMessage>
                )}
                <Button
                  variant={"default"}
                  className="inline-flex items-center justify-center w-full"
                >
                  {t("pages.signIn.cta")}
                </Button>
              </div>
            </FormContainer>
          </CardContent>

          <CardFooter>
            <p className="text-sm text-primary tracking-wide">
              {t("pages.signIn.forgotPassword")}
            </p>
          </CardFooter>
        </Card>
      </Screen>
    </div>
  );
};
export default SignInPage;
