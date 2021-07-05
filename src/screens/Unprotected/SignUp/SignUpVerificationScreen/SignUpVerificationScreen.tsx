import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { SignUpNavigatorParams } from "@screens/Unprotected/SignUp/SignUpNavigatorParams";
import { SignUpVerificationRoute } from "@screens/Unprotected/SignUp/routes";
import { Text } from "react-native-paper";

type SignUpVerificationNavigationProp = StackNavigationProp<
  SignUpNavigatorParams,
  typeof SignUpVerificationRoute
>;

type SignUpVerificationRouteProp = RouteProp<
  SignUpNavigatorParams,
  typeof SignUpVerificationRoute
>;

interface SignUpVerificationProps {
  navigation: SignUpVerificationNavigationProp;
  route: SignUpVerificationRouteProp;
}

const SignUpVerificationScreen: React.FC<SignUpVerificationProps> = () => {
  return (
    <SafeAreaView>
      <Text>VERIFY</Text>
    </SafeAreaView>
  );
};

export default SignUpVerificationScreen;
