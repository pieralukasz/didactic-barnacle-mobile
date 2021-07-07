import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import SuccessScreen from "@screens/Common/SuccessScreen";

import { SignUpNavigatorParams } from "@screens/Unprotected/SignUp/SignUpNavigatorParams";
import { SignUpSuccessRoute } from "@screens/Unprotected/SignUp/routes";
import { SignInRoute } from "@screens/Unprotected/routes";

import resetNavigation from "@utils/navigation/resetNavigation";

type SignUpSuccessNavigationProp = StackNavigationProp<
  SignUpNavigatorParams,
  typeof SignUpSuccessRoute
>;

type SignUpSuccessRouteProp = RouteProp<
  SignUpNavigatorParams,
  typeof SignUpSuccessRoute
>;

interface SignUpSuccessProps {
  navigation: SignUpSuccessNavigationProp;
  route: SignUpSuccessRouteProp;
}

const SignUpSuccessScreen: React.FC<SignUpSuccessProps> = ({ navigation }) => {
  return (
    <SuccessScreen
      title="Successfully verified"
      submitButton={{
        onSubmit: () => resetNavigation(navigation, SignInRoute),
        text: "Go to sign in",
        dataTestId: "sign-in-button",
      }}
    />
  );
};

export default SignUpSuccessScreen;
