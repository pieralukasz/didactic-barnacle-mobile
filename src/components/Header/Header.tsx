import React, { memo } from "react";
import { View } from "react-native";
import { IconButton } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ArrowLeft from "@assets/icons/ArrowLeftIcon.svg";

import styles from "./styles";

interface Props {
  onBackButtonPress: () => void;
}

const Header: React.FC<Props> = ({ onBackButtonPress }) => {
  const { left, top, right } = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingLeft: left + 6,
        paddingTop: top,
        paddingRight: right,
        ...styles,
      }}>
      <IconButton onPress={onBackButtonPress} icon={ArrowLeft} />
    </View>
  );
};

export default memo(Header);
