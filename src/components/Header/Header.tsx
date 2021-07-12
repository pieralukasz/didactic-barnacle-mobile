import React, { memo, useCallback } from "react";
import { Platform, View } from "react-native";
import { IconButton } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import attachAccessibilityID from "@utils/attachAccessibilityID";

import ArrowLeft from "@assets/icons/ArrowLeftIcon.svg";

import styles from "./styles";

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { left, top, right, bottom } = useSafeAreaInsets();

  const backButtonPress = useCallback(() => {
    if (!navigation) {
      return;
    }
    navigation.goBack();
  }, [navigation]);

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
        onPress={backButtonPress}
        icon={ArrowLeft}
      />
    </View>
  );
};

export default memo(Header);
