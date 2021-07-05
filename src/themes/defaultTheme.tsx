import { DefaultTheme } from "react-native-paper";

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      error: string;
    }
    interface Theme {
      customColors: {
        black: string;
        white: string;
      };
      colors: ThemeColors;
    }
  }
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    error: "#d90027",
  },
  customColors: {
    black: "#19000e",
    white: "#ffffff",
  },
};

export default theme;
