import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    elevation: 0,
    height: Platform.select({
      android: 36,
      ios: 44,
    }),
    borderBottomWidth: 0,
    shadowColor: "transparent",
    flexDirection: "row",
  },
});

export default styles;
