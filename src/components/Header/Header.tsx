import React, { memo } from "react";
import { View } from "react-native";

import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ArrowLeft from "@assets/icons/ArrowLeftIcon.svg";
import attachAccessibilityID from "@utils/attachAccessibilityID";

import styles from "./styles";

interface Props {
  onBackButtonPress: () => void;
}

const Header: React.FC<Props> = ({ onBackButtonPress }) => {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: top,
        ...styles.header,
      }}>
      <View style={styles.headerInner}>
        <IconButton
          {...attachAccessibilityID("back-button")}
          onPress={onBackButtonPress}
          icon={ArrowLeft}
        />
      </View>
    </View>
  );
};

export default memo(Header);
