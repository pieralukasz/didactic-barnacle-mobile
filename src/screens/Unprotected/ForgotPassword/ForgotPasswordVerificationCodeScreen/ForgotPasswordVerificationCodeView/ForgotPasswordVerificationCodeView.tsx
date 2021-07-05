import React from "react";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface ForgotPasswordVerificationCodeViewProps {
  onSubmit: () => void;
}

const ForgotPasswordVerificationCodeView: React.FC<ForgotPasswordVerificationCodeViewProps> =
  ({ onSubmit }) => {
    return (
      <SafeAreaView>
        <Text>VERIFICATION CODE</Text>
        <Button onPress={onSubmit}>VERIFY</Button>
      </SafeAreaView>
    );
  };

export default ForgotPasswordVerificationCodeView;
