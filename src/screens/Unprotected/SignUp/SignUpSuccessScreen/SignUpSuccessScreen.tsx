import React from "react";
import { View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { SignUpNavigatorParams } from "@screens/Unprotected/SignUp/SignUpNavigatorParams";
import { SignUpSuccessRoute } from "@screens/Unprotected/SignUp/routes";

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

const SignUpSuccessScreen: React.FC<SignUpSuccessProps> = () => {
  return <View />;
};

export default SignUpSuccessScreen;
