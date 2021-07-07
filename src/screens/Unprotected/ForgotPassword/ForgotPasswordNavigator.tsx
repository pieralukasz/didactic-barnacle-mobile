import React from "react";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { ForgotPasswordRoute } from "@screens/Unprotected/routes";

import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";

import {
  ForgotPasswordEmailRoute,
  ForgotPasswordSuccessRoute,
  ForgotPasswordVerificationCodeRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

import ForgotPasswordEmailScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordEmailScreen";
import ForgotPasswordVerificationCodeScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordVerificationCodeScreen";
import ForgotPasswordSuccessScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordSuccessScreen";
import Header from "@components/Header/Header";

const Stack = createStackNavigator<ForgotPasswordParams>();

type ForgotPasswordNavigatorNavigationProp = StackNavigationProp<
  UnprotectedNavigatorParams,
  typeof ForgotPasswordRoute
>;

type ForgotPasswordNavigatorRouteProp = RouteProp<
  UnprotectedNavigatorParams,
  typeof ForgotPasswordRoute
>;

interface ForgotPasswordNavigatorProps {
  navigation: ForgotPasswordNavigatorNavigationProp;
  route: ForgotPasswordNavigatorRouteProp;
}

const ForgotPasswordNavigator: React.FC<ForgotPasswordNavigatorProps> = ({
  navigation,
}) => {
  return (
    <Stack.Navigator
      initialRouteName={ForgotPasswordEmailRoute}
      screenOptions={{
        headerShown: false,
        header: () => <Header onBackButtonPress={() => navigation.goBack()} />,
      }}>
      <Stack.Screen
        name={ForgotPasswordEmailRoute}
        component={ForgotPasswordEmailScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={ForgotPasswordVerificationCodeRoute}
        component={ForgotPasswordVerificationCodeScreen}
      />
      <Stack.Screen
        name={ForgotPasswordSuccessRoute}
        component={ForgotPasswordSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default ForgotPasswordNavigator;
