import React, { memo } from "react";
import { Platform, View } from "react-native";
import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import attachAccessibilityID from "@utils/attachAccessibilityID";

import ArrowLeft from "@assets/icons/ArrowLeftIcon.svg";

import styles from "./styles";

interface Props {
  onBackButtonPress: () => void;
}

const Header: React.FC<Props> = ({ onBackButtonPress }) => {
  const { left, top, right, bottom } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingLeft: left + 6,
        paddingTop: Platform.select({
          android: top + 12,
          ios: top,
        }),
        paddingRight: right,
        paddingBottom: bottom,
        ...styles.header,
      }}>
      <IconButton
        {...attachAccessibilityID("back-button")}
        onPress={onBackButtonPress}
        icon={ArrowLeft}
      />
    </View>
  );
};

export default memo(Header);
