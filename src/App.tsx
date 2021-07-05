import React from "react";

import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Providers from "@features/Providers";
import MainNavigator from "@screens/MainNavigator";
import theme from "@themes/defaultTheme";

import { rootNavigationRef } from "./RootNavigation";

const App: React.FC = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.customColors.black}
        barStyle="dark-content"
      />
      <Providers>
        <NavigationContainer ref={rootNavigationRef}>
          <MainNavigator />
        </NavigationContainer>
      </Providers>
    </>
  );
};

export default App;
