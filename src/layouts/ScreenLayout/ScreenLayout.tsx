import React, { useCallback } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "@layouts/ScreenLayout/styles";
import FullScreenPreloader from "@components/FullScreenPreloader/FullScreenPreloader";

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
  scrollView = false,
  viewStyles,
  loading,
}) => {
  const generateTitle = useCallback(() => {
    if (title) {
      return <Text style={{ ...styles.title, ...titleStyles }}>{title}</Text>;
    }
    return null;
  }, [title, titleStyles]);

  const generateSubtitle = useCallback(() => {
    if (subtitle) {
      return (
        <Text style={{ ...styles.subtitle, ...subtitleStyles }}>
          {subtitle}
        </Text>
      );
    }
    return null;
  }, [subtitle, subtitleStyles]);

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
            {scrollView ? (
              <ScrollView
                keyboardShouldPersistTaps="handled"
                style={{ ...styles.view, ...viewStyles }}>
                {generateTitle()}
                {generateSubtitle()}
                {children}
              </ScrollView>
            ) : (
              <View style={{ ...styles.view, ...viewStyles }}>
                {generateTitle()}
                {generateSubtitle()}
                {children}
              </View>
            )}
          </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default ScreenLayout;
