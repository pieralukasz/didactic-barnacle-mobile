import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import ScreenLayout from "@layouts/ScreenLayout";
import CommonViewProps from "@interfaces/CommonViewProps";

import Button from "@components/Button";

import SignUpVerificationForm from "./SignUpVerificationForm";
import SignUpVerificationFormState from "./SignUpVerificationForm/SignUpVerificationFormState";

import styles from "./styles";

interface SignUpVerificationViewProps
  extends CommonViewProps<SignUpVerificationFormState> {
  phoneNumber: string | number;
  onResentCode: () => void;
}

const SignUpVerificationView: React.FC<SignUpVerificationViewProps> = ({
  onSubmit,
  loading,
  phoneNumber,
  onResentCode,
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
      <Button
        type="secondary"
        testId="signup-resent-button"
        onPress={onResentCode}
        style={styles.resendButton}>
        Resent verification code
      </Button>
    </ScreenLayout>
  );
};

export default SignUpVerificationView;
