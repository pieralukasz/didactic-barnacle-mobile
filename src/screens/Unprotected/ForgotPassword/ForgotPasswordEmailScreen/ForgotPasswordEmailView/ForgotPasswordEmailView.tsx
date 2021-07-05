import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";
import styles from "./styles";

interface ForgotPasswordEmailViewProps {
  onSignIn: () => void;
  onSubmit: () => void;
}

const ForgotPasswordEmailView: React.FC<ForgotPasswordEmailViewProps> = ({
  onSignIn,
  onSubmit,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>FORGOT PASSWORD</Text>
      <Button onPress={onSubmit}>Submit</Button>
      <Button onPress={onSignIn}>Back to Sign in Page</Button>
    </SafeAreaView>
  );
};

export default ForgotPasswordEmailView;
