import { SignUp } from "@clerk/clerk-react";

export const SignUpPage = () => {
  return <SignUp path={`${import.meta.env.BASE_URL}signup`} routing="path" signInUrl={`${import.meta.env.BASE_URL}signin`} />;
};
