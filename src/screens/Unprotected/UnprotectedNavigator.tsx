import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import SignInScreen from "@screens/Unprotected/SignInScreen";
import SignUpNavigator from "@screens/Unprotected/SignUp/SignUpNavigator";

import { UnprotectedRoute } from "@screens/routes";
import {
  ForgotPasswordRoute,
  SignInRoute,
  SignUpRoute,
} from "@screens/Unprotected/routes";
import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import ForgotPasswordNavigator from "@screens/Unprotected/ForgotPassword/ForgotPasswordNavigator";

const Stack = createStackNavigator<UnprotectedNavigatorParams>();

type UnprotectedNavigatorNavigationProp = StackNavigationProp<
  MainNavigatorParams,
  typeof UnprotectedRoute
>;

type UnprotectedNavigatorRouteProp = RouteProp<
  MainNavigatorParams,
  typeof UnprotectedRoute
>;

interface UnprotectedNavigatorProps {
  navigation: UnprotectedNavigatorNavigationProp;
  route: UnprotectedNavigatorRouteProp;
}

const UnprotectedNavigator: React.FC<UnprotectedNavigatorProps> = () => {
  return (
    <Stack.Navigator
      initialRouteName={SignInRoute}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SignInRoute} component={SignInScreen} />
      <Stack.Screen name={SignUpRoute} component={SignUpNavigator} />
      <Stack.Screen
        name={ForgotPasswordRoute}
        component={ForgotPasswordNavigator}
      />
    </Stack.Navigator>
  );
};

export default UnprotectedNavigator;
