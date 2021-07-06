import React, { useCallback } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle,
  View,
} from "react-native";
import { Text } from "react-native-paper";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/stack";

import styles from "@layouts/ScreenLayout/styles";
import FullScreenPreloader from "@components/FullScreenPreloader/FullScreenPreloader";
import useKeyboardStatus from "@hooks/useKeyboardStatus";

interface ScreenLayoutProps {
  title?: string;
  titleStyles?: TextStyle;
  subtitle?: string;
  subtitleStyles?: TextStyle;
  viewStyles?: ViewStyle;
  loading?: boolean;
  scrollEnabled?: boolean;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  title,
  titleStyles,
  subtitle,
  subtitleStyles,
  viewStyles,
  loading,
  scrollEnabled = false,
}) => {
  const isKeyboardOpen = useKeyboardStatus();
  const headerHeight = useHeaderHeight();

  const { bottom, left, right } = useSafeAreaInsets();

  const setTopPadding = useCallback(
    () =>
      headerHeight > 0
        ? Platform.select({
            android: 4,
            ios: 8,
          })
        : Platform.select({
            android: 24,
            ios: 48,
          }),
    [headerHeight]
  );

  return (
    <>
      {loading && <FullScreenPreloader visible={loading} />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            ...styles.container,
            paddingBottom: bottom,
            paddingLeft: left,
            paddingTop: setTopPadding(),
            paddingRight: right,
          }}>
          <KeyboardAvoidingView
            {...(Platform.OS === "ios"
              ? {
                  behavior: "padding",
                  keyboardVerticalOffset: 0,
                }
              : {})}>
            <ScrollView
              scrollEnabled={scrollEnabled || isKeyboardOpen}
              keyboardShouldPersistTaps="handled"
              style={{
                ...styles.view,
                ...viewStyles,
                paddingTop: setTopPadding(),
              }}>
              {title && (
                <Text style={{ ...styles.title, ...titleStyles }}>{title}</Text>
              )}
              {subtitle && (
                <Text style={{ ...styles.subtitle, ...subtitleStyles }}>
                  {subtitle}
                </Text>
              )}
              {children}
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ScreenLayout;
