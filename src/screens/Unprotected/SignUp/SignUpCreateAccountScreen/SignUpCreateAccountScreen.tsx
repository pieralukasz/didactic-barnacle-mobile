import React from "react";

import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { SignUpNavigatorParams } from "@screens/Unprotected/SignUp/SignUpNavigatorParams";
import {
  SignUpCreateAccountRoute,
  SignUpVerificationRoute,
} from "@screens/Unprotected/SignUp/routes";

import { SignInRoute, SignUpRoute } from "@screens/Unprotected/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import resetNavigation from "@utils/navigation/resetNavigation";

import SignUpCreateAccountView from "./SignUpCreateAccountView";

type SignUpCreateAccountNavigationProp = CompositeNavigationProp<
  StackNavigationProp<SignUpNavigatorParams, typeof SignUpCreateAccountRoute>,
  StackNavigationProp<UnprotectedNavigatorParams, typeof SignUpRoute>
>;

type SignUpCreateAccountRouteProp = RouteProp<
  SignUpNavigatorParams,
  typeof SignUpCreateAccountRoute
>;

interface SignUpCreateAccountProps {
  navigation: SignUpCreateAccountNavigationProp;
  route: SignUpCreateAccountRouteProp;
}

const SignUpCreateAccountScreen: React.FC<SignUpCreateAccountProps> = ({
  navigation,
}) => {
  return (
    <SignUpCreateAccountView
      onSubmit={() => navigation.navigate(SignUpVerificationRoute)}
      onSignIn={() => resetNavigation(navigation, SignInRoute)}
    />
  );
};

export default SignUpCreateAccountScreen;
