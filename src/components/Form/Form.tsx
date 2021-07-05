import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import FormButton from "@interfaces/FormButton";
import styles from "@components/Form/styles";

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
        mode="outlined"
        disabled={disabled}
        style={styles.submitButton}
        onPress={onSubmit}>
        {text || "Text"}
      </Button>
    </View>
  );
};

export default Form;
