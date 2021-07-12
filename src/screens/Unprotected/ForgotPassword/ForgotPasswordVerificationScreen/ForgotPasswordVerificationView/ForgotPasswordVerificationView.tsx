import React from "react";
import { View } from "react-native";

import { Button, Text } from "react-native-paper";

import attachAccessibilityID from "@utils/attachAccessibilityID";
import CommonViewProps from "@interfaces/CommonViewProps";
import ScreenLayout from "@layouts/ScreenLayout";

import ForgotPasswordVerificationForm from "./ForgotPasswordVerificationForm";
import ForgotPasswordVerificationFormState from "./ForgotPasswordVerificationForm/ForgotPasswordVerificationFormState";
import styles from "./styles";

interface ForgotPasswordVerificationCodeViewProps
  extends CommonViewProps<ForgotPasswordVerificationFormState> {
  phoneNumber: string;
  onResentCode: () => void;
}

const ForgotPasswordVerificationView: React.FC<ForgotPasswordVerificationCodeViewProps> =
  ({ onSubmit, phoneNumber, onResentCode, loading }) => {
    return (
      <ScreenLayout title="Enter the verification code" loading={loading}>
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
        <ForgotPasswordVerificationForm onSubmit={onSubmit} />
        <Button
          {...attachAccessibilityID("orgot-password-resent-button")}
          mode="outlined"
          onPress={onResentCode}
          style={styles.resendButton}>
          Resent verification code
        </Button>
      </ScreenLayout>
    );
  };

export default ForgotPasswordVerificationView;
