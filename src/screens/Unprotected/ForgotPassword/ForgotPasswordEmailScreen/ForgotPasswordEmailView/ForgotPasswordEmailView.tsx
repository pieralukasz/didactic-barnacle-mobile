import React from "react";
import { Text } from "react-native-paper";

import ScreenLayout from "@layouts/ScreenLayout";
import Button from "@components/Button";

import CommonViewProps from "@interfaces/CommonViewProps";
import ForgotPasswordEmailState from "./ForgotPasswordEmailForm/ForgotPasswordEmailState";
import ForgotPasswordEmailForm from "./ForgotPasswordEmailForm";

import styles from "./styles";

interface ForgotPasswordEmailViewProps
  extends CommonViewProps<ForgotPasswordEmailState> {
  onSignIn: () => void;
}

const ForgotPasswordEmailView: React.FC<ForgotPasswordEmailViewProps> = ({
  onSignIn,
  onSubmit,
  loading,
}) => {
  return (
    <ScreenLayout title="Forgot your password?" loading={loading}>
      <Text style={styles.subtitle}>
        Please write email you used during create account process. We will send
        you a verification code via sms.
      </Text>
      <ForgotPasswordEmailForm onSubmit={onSubmit} />
      <Button
        style={styles.signInButton}
        type="secondary"
        dataTestId="sign-in-button"
        onPress={onSignIn}>
        Back to sign in page
      </Button>
    </ScreenLayout>
  );
};

export default ForgotPasswordEmailView;
