import React from "react";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";
import { ForgotPasswordSuccessRoute } from "@screens/Unprotected/ForgotPassword/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import { ForgotPasswordRoute, SignInRoute } from "@screens/Unprotected/routes";

import resetNavigation from "@utils/navigation/resetNavigation";

import ForgotPasswordSuccessView from "./ForgotPasswordSuccessView";

type ForgotPasswordSuccessNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ForgotPasswordParams, typeof ForgotPasswordSuccessRoute>,
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>
>;

type ForgotPasswordSuccessNavigatorRouteProp = RouteProp<
  ForgotPasswordParams,
  typeof ForgotPasswordSuccessRoute
>;

interface ForgotPasswordSuccessNavigatorProps {
  navigation: ForgotPasswordSuccessNavigationProp;
  route: ForgotPasswordSuccessNavigatorRouteProp;
}

const ForgotPasswordSuccessScreen: React.FC<ForgotPasswordSuccessNavigatorProps> =
  ({ navigation }) => {
    return (
      <ForgotPasswordSuccessView
        // TODO
        onSubmit={() => resetNavigation(navigation as any, SignInRoute)}
      />
    );
  };

export default ForgotPasswordSuccessScreen;
