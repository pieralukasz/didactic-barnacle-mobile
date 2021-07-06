import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { SignUpNavigatorParams } from "@screens/Unprotected/SignUp/SignUpNavigatorParams";
import { SignUpSuccessRoute } from "@screens/Unprotected/SignUp/routes";
import SignUpSuccessScreenView from "@screens/Unprotected/SignUp/SignUpSuccessScreen/SignUpSuccessScreenView";
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
    <SignUpSuccessScreenView
      onSignIn={() => resetNavigation(navigation, SignInRoute)}
    />
  );
};

export default SignUpSuccessScreen;
