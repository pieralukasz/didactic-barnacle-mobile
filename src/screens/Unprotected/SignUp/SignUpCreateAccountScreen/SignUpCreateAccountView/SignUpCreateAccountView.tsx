import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button } from "react-native-paper";

import styles from "./styles";

interface SignUpCreateAccountViewProps {
  onSubmit: () => void;
  onSignIn: () => void;
}

const SignUpCreateAccountView: React.FC<SignUpCreateAccountViewProps> = ({
  onSubmit,
  onSignIn,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SIGN UP CREATE ACCOUNT VIEW</Text>
      <Button onPress={onSubmit}>Sign Up</Button>
      <Button onPress={onSignIn}>Sign In</Button>
    </SafeAreaView>
  );
};

export default SignUpCreateAccountView;
