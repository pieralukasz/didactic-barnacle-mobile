import React, { useEffect } from "react";
import { View } from "react-native";

import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import useUserContext from "@features/User/useUserContext";

import { MainNavigatorParams } from "@screens/MainNavigatorParams";
import { testProtectedRoute } from "@screens/Protected/routes";
import { ProtectedRoute, UnprotectedRoute } from "@screens/routes";

import { ProtectedNavigatorParams } from "./ProtectedNavigatorParams";

const Stack = createStackNavigator<ProtectedNavigatorParams>();

type ProtectedNavigatorNavigationProp = StackNavigationProp<
  MainNavigatorParams,
  typeof ProtectedRoute
>;

type ProtectedNavigatorRouteProp = RouteProp<
  MainNavigatorParams,
  typeof ProtectedRoute
>;

interface ProtectedNavigatorProps {
  navigation: ProtectedNavigatorNavigationProp;
  route: ProtectedNavigatorRouteProp;
}

const ProtectedNavigator: React.FC<ProtectedNavigatorProps> = ({
  navigation,
}) => {
  const { user } = useUserContext();

  useEffect(() => {
    if (user === null) {
      navigation.reset({
        ...navigation,
        routes: [
          {
            name: UnprotectedRoute,
          },
        ],
      });
    }
  }, [navigation, user]);

  return (
    <Stack.Navigator initialRouteName={ProtectedRoute}>
      <Stack.Screen name={testProtectedRoute} component={View} />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
