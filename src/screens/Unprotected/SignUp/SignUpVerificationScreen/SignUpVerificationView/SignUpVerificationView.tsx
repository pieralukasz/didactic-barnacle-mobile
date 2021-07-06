import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import ScreenLayout from "@layouts/ScreenLayout";
import CommonViewProps from "@interfaces/CommonViewProps";
import SignUpVerificationForm from "@screens/Unprotected/SignUp/SignUpVerificationScreen/SignUpVerificationView/SignUpVerificationForm";

import theme from "@themes/defaultTheme";

import Button from "@components/Button";

import styles from "./styles";

import SignUpVerificationFormState from "./SignUpVerificationForm/SignUpVerificationFormState";

interface SignUpVerificationViewProps
  extends CommonViewProps<SignUpVerificationFormState> {
  phoneNumber: string | number;
}

const SignUpVerificationView: React.FC<SignUpVerificationViewProps> = ({
  onSubmit,
  loading,
  phoneNumber,
}) => {
  return (
    <ScreenLayout title="Enter verification code" loading={loading}>
      <View style={styles.textContainer}>
        <Text style={styles.textInfo}>
          A verification code has been sent to:
        </Text>
        <Text style={{ ...styles.textInfo, ...styles.textPhoneNumber }}>
          {phoneNumber}
        </Text>
        <Text style={styles.textInfo}>
          Please, enter it below, to verify your account.
        </Text>
      </View>
      <SignUpVerificationForm onSubmit={onSubmit} />
      <Button style={{ marginTop: theme.spacing.default }} type="secondary">
        Resent verification code
      </Button>
    </ScreenLayout>
  );
};

export default SignUpVerificationView;
