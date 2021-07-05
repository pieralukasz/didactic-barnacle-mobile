import React from "react";

import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";
import {
  ForgotPasswordSuccessRoute,
  ForgotPasswordVerificationCodeRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

import ForgotPasswordVerificationCodeView from "./ForgotPasswordVerificationCodeView";

type ForgotPasswordVerificationCodeNavigationProp = StackNavigationProp<
  ForgotPasswordParams,
  typeof ForgotPasswordVerificationCodeRoute
>;

type ForgotPasswordVerificationCodeRouteProp = RouteProp<
  ForgotPasswordParams,
  typeof ForgotPasswordVerificationCodeRoute
>;

interface ForgotPasswordVerificationCodeNavigatorProps {
  navigation: ForgotPasswordVerificationCodeNavigationProp;
  route: ForgotPasswordVerificationCodeRouteProp;
}

const ForgotPasswordVerificationCodeScreen: React.FC<ForgotPasswordVerificationCodeNavigatorProps> =
  ({ navigation }) => {
    return (
      <ForgotPasswordVerificationCodeView
        onSubmit={() => navigation.navigate(ForgotPasswordSuccessRoute)}
      />
    );
  };

export default ForgotPasswordVerificationCodeScreen;
