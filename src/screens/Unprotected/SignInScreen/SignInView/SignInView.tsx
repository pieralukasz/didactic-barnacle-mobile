import React from "react";

import { Button } from "react-native-paper";

import ScreenLayout from "@layouts/ScreenLayout/ScreenLayout";
import SignInForm from "@screens/Unprotected/SignInScreen/SignInView/SignInForm";

import CommonViewProps from "@interfaces/CommonViewProps";
import SignInFormState from "@screens/Unprotected/SignInScreen/SignInView/SignInForm/SignInFormState";

interface SignInViewProps extends CommonViewProps<SignInFormState> {
  onForgotPassword: () => void;
  onSignUp: () => void;
}

const SignInView: React.FC<SignInViewProps> = ({
  onForgotPassword,
  onSignUp,
  onSubmit,
  loading,
}) => {
  return (
    <ScreenLayout title="Sign In" loading={loading}>
      <SignInForm onSubmit={onSubmit} />
      <Button onPress={onForgotPassword}>Forgot Password</Button>
      <Button onPress={onSignUp}>Sign Up</Button>
    </ScreenLayout>
  );
};

export default SignInView;
