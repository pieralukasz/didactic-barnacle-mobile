import React from "react";
import { View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { ProtectedRoute, UnprotectedRoute, ErrorRoute } from "@screens/routes";

import ProtectedNavigator from "@screens/Protected/ProtectedNavigator";
import UnprotectedNavigator from "@screens/Unprotected/UnprotectedNavigator";

import { MainNavigatorParams } from "./MainNavigatorParams";

const Stack = createStackNavigator<MainNavigatorParams>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={UnprotectedRoute}
      screenOptions={{ headerShown: false }}
      headerMode="screen">
      <Stack.Screen name={ProtectedRoute} component={ProtectedNavigator} />
      <Stack.Screen name={UnprotectedRoute} component={UnprotectedNavigator} />
      <Stack.Screen name={ErrorRoute} component={View} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
