import React from "react";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import Header from "@components/Header/Header";

import { ForgotPasswordParams } from "@screens/Unprotected/ForgotPassword/ForgotPasswordParams";
import { ForgotPasswordRoute } from "@screens/Unprotected/routes";
import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";

import {
  ForgotPasswordEmailRoute,
  ForgotPasswordResetRoute,
  ForgotPasswordSuccessRoute,
  ForgotPasswordVerificationRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

import ForgotPasswordEmailScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordEmailScreen";
import ForgotPasswordVerificationScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordVerificationScreen";
import ForgotPasswordSuccessScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordSuccessScreen";
import ForgotPasswordResetScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordResetScreen";

const Stack = createStackNavigator<ForgotPasswordParams>();

type ForgotPasswordNavigatorNavigationProp = CompositeNavigationProp<
  StackNavigationProp<UnprotectedNavigatorParams, typeof ForgotPasswordRoute>,
  StackNavigationProp<MainNavigatorParams>
>;

type ForgotPasswordNavigatorRouteProp = RouteProp<
  UnprotectedNavigatorParams,
  typeof ForgotPasswordRoute
>;

interface ForgotPasswordNavigatorProps {
  navigation: ForgotPasswordNavigatorNavigationProp;
  route: ForgotPasswordNavigatorRouteProp;
}

const ForgotPasswordNavigator: React.FC<ForgotPasswordNavigatorProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={ForgotPasswordEmailRoute}
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
      }}
      headerMode="screen">
      <Stack.Screen
        name={ForgotPasswordEmailRoute}
        component={ForgotPasswordEmailScreen}
      />
      <Stack.Screen
        name={ForgotPasswordVerificationRoute}
        component={ForgotPasswordVerificationScreen}
      />
      <Stack.Screen
        name={ForgotPasswordResetRoute}
        component={ForgotPasswordResetScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ForgotPasswordSuccessRoute}
        component={ForgotPasswordSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default ForgotPasswordNavigator;
