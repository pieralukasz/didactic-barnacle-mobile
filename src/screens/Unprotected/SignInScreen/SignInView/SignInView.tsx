import React from "react";
import { View } from "react-native";

import { Text } from "react-native-paper";

import ScreenLayout from "@layouts/ScreenLayout";
import Button from "@components/Button";
import SignInForm from "@screens/Unprotected/SignInScreen/SignInView/SignInForm";

import SignInFormState from "@screens/Unprotected/SignInScreen/SignInView/SignInForm/SignInFormState";

import CommonViewProps from "@interfaces/CommonViewProps";

import styles from "./styles";

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
    <ScreenLayout
      title="Sign In"
      loading={loading}
      viewStyles={styles.container}>
      <SignInForm onSubmit={onSubmit} />
      <View style={styles.forgotPassword}>
        <Button
          type="text"
          dataTestId="forgot-password-button"
          onPress={onForgotPassword}>
          Forgot Password?
        </Button>
      </View>
      <View style={styles.signUp}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Button type="secondary" dataTestId="sign-up-button" onPress={onSignUp}>
          SIGN UP
        </Button>
      </View>
    </ScreenLayout>
  );
};

export default SignInView;
