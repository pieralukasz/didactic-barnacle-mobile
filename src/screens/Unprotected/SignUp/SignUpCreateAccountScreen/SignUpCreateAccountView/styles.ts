import { StyleSheet } from "react-native";
import theme from "@themes/defaultTheme";

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.spacing.default * 2,
  },
  signIn: {
    marginTop: 44,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  signInText: {
    fontSize: 16,
    marginRight: theme.spacing.default,
  },
});

export default styles;
