import { Platform } from "react-native";

type AttachAccessibilityIDType = Partial<{
  testID: string;
  accessibilityLabel: string;
}>;

const attachAccessibilityID = (id: string): AttachAccessibilityIDType => {
  return Platform.OS === "ios" ? { testID: id } : { accessibilityLabel: id };
};

export default attachAccessibilityID;
