import React from "react";
import { View } from "react-native";

import FormButton from "@interfaces/FormButton";
import styles from "@components/Form/styles";
import Button from "@components/Button";

interface FormProps {
  submitButton: FormButton;
}

const Form: React.FC<FormProps> = ({
  children,
  submitButton: { disabled, onSubmit, text },
}) => {
  return (
    <View>
      {children}
      <Button
        disabled={disabled}
        style={styles.submitButton}
        onPress={onSubmit}>
        {text || "Submit"}
      </Button>
    </View>
  );
};

export default Form;
