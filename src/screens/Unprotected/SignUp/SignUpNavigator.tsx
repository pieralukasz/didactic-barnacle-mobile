import React from "react";

import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";

import { SignUpRoute } from "@screens/Unprotected/routes";

import { UnprotectedNavigatorParams } from "@screens/Unprotected/UnprotectedNavigatorParams";
import SignUpVerificationScreen from "@screens/Unprotected/SignUp/SignUpVerificationScreen";
import SignUpSuccessScreen from "@screens/Unprotected/SignUp/SignUpSuccessScreen";
import SignUpCreateAccountScreen from "@screens/Unprotected/SignUp/SignUpCreateAccountScreen";

import Header from "@components/Header";

import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { SignUpNavigatorParams } from "./SignUpNavigatorParams";
import {
  SignUpCreateAccountRoute,
  SignUpSuccessRoute,
  SignUpVerificationRoute,
} from "./routes";

const Stack = createStackNavigator<SignUpNavigatorParams>();

type SignUpNavigatorNavigationProp = CompositeNavigationProp<
  StackNavigationProp<UnprotectedNavigatorParams, typeof SignUpRoute>,
  StackNavigationProp<MainNavigatorParams>
>;

type SignUpNavigatorRouteProp = RouteProp<
  UnprotectedNavigatorParams,
  typeof SignUpRoute
>;

interface SignUpNavigatorProps {
  navigation: SignUpNavigatorNavigationProp;
  route: SignUpNavigatorRouteProp;
}

const SignUpNavigator: React.FC<SignUpNavigatorProps> = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName={SignUpCreateAccountRoute}
      screenOptions={{
        headerShown: false,
        header: () => <Header onBackButtonPress={() => navigation.goBack()} />,
      }}
      headerMode="screen">
      <Stack.Screen
        name={SignUpCreateAccountRoute}
        component={SignUpCreateAccountScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name={SignUpVerificationRoute}
        component={SignUpVerificationScreen}
      />
      <Stack.Screen name={SignUpSuccessRoute} component={SignUpSuccessScreen} />
    </Stack.Navigator>
  );
};

export default SignUpNavigator;
