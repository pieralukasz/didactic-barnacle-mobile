import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextStyle,
  TouchableWithoutFeedback,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "@layouts/ScreenLayout/styles";
import FullScreenPreloader from "@components/FullScreenPreloader/FullScreenPreloader";
import useKeyboardStatus from "@hooks/useKeyboardStatus";

interface ScreenLayoutProps {
  title?: string;
  titleStyles?: TextStyle;
  subtitle?: string;
  subtitleStyles?: TextStyle;
  scrollView?: boolean;
  viewStyles?: ViewStyle;
  loading?: boolean;
}

const ScreenLayout: React.FC<ScreenLayoutProps> = ({
  children,
  title,
  titleStyles,
  subtitle,
  subtitleStyles,
  viewStyles,
  loading,
}) => {
  const isKeyboardOpen = useKeyboardStatus();

  return (
    <>
      {loading && <FullScreenPreloader visible={loading} />}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView
            {...(Platform.OS === "ios"
              ? {
                  behavior: "padding",
                  keyboardVerticalOffset: 0,
                }
              : {})}>
            <ScrollView
              scrollEnabled={isKeyboardOpen}
              keyboardShouldPersistTaps="handled"
              style={{ ...styles.view, ...viewStyles }}>
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
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ScreenLayout;
