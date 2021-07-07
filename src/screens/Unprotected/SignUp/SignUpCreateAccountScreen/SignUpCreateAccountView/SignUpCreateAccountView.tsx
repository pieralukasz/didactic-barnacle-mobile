import React from "react";
import { Text } from "react-native-paper";
import { View } from "react-native";

import ScreenLayout from "@layouts/ScreenLayout";
import Button from "@components/Button";

import SignUpCreateAccountFormState from "@screens/Unprotected/SignUp/SignUpCreateAccountScreen/SignUpCreateAccountView/SignUpCreateAccountForm/SignUpCreateAccountFormState";
import SignUpCreateAccountForm from "@screens/Unprotected/SignUp/SignUpCreateAccountScreen/SignUpCreateAccountView/SignUpCreateAccountForm";

import CommonViewProps from "@interfaces/CommonViewProps";

import styles from "./styles";

interface SignUpCreateAccountViewProps
  extends CommonViewProps<SignUpCreateAccountFormState> {
  onSignIn: () => void;
}

const SignUpCreateAccountView: React.FC<SignUpCreateAccountViewProps> = ({
  onSubmit,
  onSignIn,
}) => {
  return (
    <ScreenLayout title="Create your account">
      <SignUpCreateAccountForm onSubmit={onSubmit} />
      <View style={styles.signIn}>
        <Text style={styles.signInText}>Already have an account?</Text>
        <Button type="secondary" dataTestId="sign-in-button" onPress={onSignIn}>
          Sign in
        </Button>
      </View>
    </ScreenLayout>
  );
};

export default SignUpCreateAccountView;
