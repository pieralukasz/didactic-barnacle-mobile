import React, { useCallback, useState } from "react";
import { View } from "react-native";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";
import {
  ForgotPasswordResetRoute,
  ForgotPasswordSuccessRoute,
} from "@screens/Unprotected/ForgotPassword/routes";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import { ForgotPasswordRoute } from "@screens/Unprotected/routes";
import { Text } from "react-native-paper";
import ForgotPasswordResetView from "@screens/Unprotected/ForgotPassword/ForgotPasswordResetScreen/ForgotPasswordResetView";
import resetNavigation from "@utils/navigation/resetNavigation";

type ForgotPasswordResetNavigationProp = CompositeNavigationProp<
  StackNavigationProp<ForgotPasswordParams, typeof ForgotPasswordResetRoute>,
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>
>;

type ForgotPasswordResetRouteProp = RouteProp<
  ForgotPasswordParams,
  typeof ForgotPasswordResetRoute
>;

interface ForgotPasswordResetProps {
  navigation: ForgotPasswordResetNavigationProp;
  route: ForgotPasswordResetRouteProp;
}

const ForgotPasswordResetScreen: React.FC<ForgotPasswordResetProps> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = useCallback(() => {
    try {
      setLoading(true);
      resetNavigation(navigation, ForgotPasswordSuccessRoute);
      setLoading(false);
    } catch {
      setLoading(false);
    }
  }, [navigation]);

  return (
    <ForgotPasswordResetView
      // TODO
      onCancel={() => {}}
      onSubmit={onSubmit}
      loading={loading}
    />
  );
};

export default ForgotPasswordResetScreen;
