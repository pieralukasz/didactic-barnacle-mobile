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
  ForgotPasswordResetRoute,
  ForgotPasswordSuccessRoute,
  ForgotPasswordVerificationRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

import ForgotPasswordEmailScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordEmailScreen";
import ForgotPasswordVerificationScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordVerificationScreen";
import ForgotPasswordSuccessScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordSuccessScreen";
import ForgotPasswordResetScreen from "@screens/Unprotected/ForgotPassword/ForgotPasswordResetScreen";
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
      }}
      headerMode="screen">
      <Stack.Screen
        name={ForgotPasswordEmailRoute}
        component={ForgotPasswordEmailScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={ForgotPasswordVerificationRoute}
        component={ForgotPasswordVerificationScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={ForgotPasswordResetRoute}
        component={ForgotPasswordResetScreen}
      />
      <Stack.Screen
        name={ForgotPasswordSuccessRoute}
        component={ForgotPasswordSuccessScreen}
      />
    </Stack.Navigator>
  );
};

export default ForgotPasswordNavigator;
