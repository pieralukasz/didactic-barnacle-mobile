import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Success from "@assets/images/Success.svg";

import Title from "@components/Title";
import Button from "@components/Button";

import styles from "./styles";

interface SignUpSuccessScreenViewProps {
  onSignIn: () => void;
}

const SignUpSuccessScreenView: React.FC<SignUpSuccessScreenViewProps> = ({
  onSignIn,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Success />
      <Title titleStyles={styles.title}>Successfully verified</Title>
      <Button style={styles.button} onPress={onSignIn}>
        Go to sign in
      </Button>
    </SafeAreaView>
  );
};

export default SignUpSuccessScreenView;
