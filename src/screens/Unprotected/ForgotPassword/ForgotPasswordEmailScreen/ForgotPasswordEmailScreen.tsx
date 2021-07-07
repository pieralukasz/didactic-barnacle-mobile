import React, { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";

import { ForgotPasswordRoute, SignInRoute } from "@screens/Unprotected/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";

import resetNavigation from "@utils/navigation/resetNavigation";

import { ForgotPasswordParams } from "../ForgotPasswordParams";
import {
  ForgotPasswordEmailRoute,
  ForgotPasswordVerificationCodeRoute,
} from "../routes";

import ForgotPasswordEmailView from "./ForgotPasswordEmailView";

type ForgotPasswordEmailNavigatorNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ForgotPasswordParams, typeof ForgotPasswordEmailRoute>,
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>
>;

type ForgotPasswordEmailNavigatorRouteProp = RouteProp<
  ForgotPasswordParams,
  typeof ForgotPasswordEmailRoute
>;

interface ForgotPasswordEmailNavigatorProps {
  navigation: ForgotPasswordEmailNavigatorNavigationProp;
  route: ForgotPasswordEmailNavigatorRouteProp;
}

const ForgotPasswordEmailScreen: React.FC<ForgotPasswordEmailNavigatorProps> =
  ({ navigation }) => {
    const [loading, setLoading] = useState<boolean>(false);

    return (
      <ForgotPasswordEmailView
        onSignIn={() => resetNavigation(navigation, SignInRoute)}
        onSubmit={() =>
          navigation.navigate(ForgotPasswordVerificationCodeRoute)
        }
        loading={loading}
      />
    );
  };

export default ForgotPasswordEmailScreen;
