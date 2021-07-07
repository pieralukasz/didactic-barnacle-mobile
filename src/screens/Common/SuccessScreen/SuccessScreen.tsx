import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import Success from "@assets/images/Success.svg";

import Title from "@components/Title";
import Button from "@components/Button";

import FormButton from "@interfaces/FormButton";

import styles from "./styles";

interface SuccessScreenProps {
  submitButton: FormButton;
  title: string;
}

const SuccessScreen: React.FC<SuccessScreenProps> = ({
  submitButton: { dataTestId, onSubmit, text, disabled },
  title,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Success />
      <Title titleStyles={styles.title}>{title}</Title>
      <Button
        style={styles.button}
        onPress={onSubmit}
        dataTestId={dataTestId}
        disabled={disabled}>
        {text}
      </Button>
    </SafeAreaView>
  );
};

export default SuccessScreen;
