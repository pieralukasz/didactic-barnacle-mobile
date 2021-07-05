import React, { useCallback, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import SignInFormState from "@screens/Unprotected/SignInScreen/SignInView/SignInForm/SignInFormState";
import {
  ForgotPasswordRoute,
  SignInRoute,
  SignUpRoute,
} from "@screens/Unprotected/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import resetNavigation from "@utils/navigation/resetNavigation";

import SignInView from "./SignInView";

type SignInNavigationProp = StackNavigationProp<
  UnprotectedNavigatorParams,
  typeof SignInRoute
>;

type SignInRouteProp = RouteProp<
  UnprotectedNavigatorParams,
  typeof SignInRoute
>;

interface SignInProps {
  navigation: SignInNavigationProp;
  route: SignInRouteProp;
}

const SignInScreen: React.FC<SignInProps> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSignIn = useCallback((data: SignInFormState) => {
    try {
      console.log(data);
      setLoading(true);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, []);

  return (
    <SignInView
      onSignUp={() => resetNavigation(navigation, SignUpRoute)}
      onForgotPassword={() => resetNavigation(navigation, ForgotPasswordRoute)}
      onSubmit={onSignIn}
      loading={loading}
    />
  );
};

export default SignInScreen;
