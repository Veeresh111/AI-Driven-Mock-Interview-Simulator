import { SignIn } from "@clerk/clerk-react";

export const SignInPage = () => {
  return <SignIn path={`${import.meta.env.BASE_URL}signin`} routing="path" signUpUrl={`${import.meta.env.BASE_URL}signup`} />;
};
