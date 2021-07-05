import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text } from "react-native-paper";

import styles from "./styles";

interface ForgotPasswordSuccessViewProps {
  onSubmit: () => void;
}

const ForgotPasswordSuccessView: React.FC<ForgotPasswordSuccessViewProps> = ({
  onSubmit,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SUCCESS</Text>
      <Button onPress={onSubmit}>THANK YOU</Button>
    </SafeAreaView>
  );
};

export default ForgotPasswordSuccessView;
