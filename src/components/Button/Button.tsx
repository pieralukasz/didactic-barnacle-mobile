import React, { useMemo } from "react";
import { Button as PaperButton } from "react-native-paper";
import theme from "@themes/defaultTheme";

interface ButtonModeType {
  mode?: "text" | "outlined" | "contained";
  color?: string;
}

type Props = React.ComponentProps<typeof PaperButton> & {
  type?: "default" | "secondary" | "text";
};

const Button: React.FC<Props> = (props) => {
  const buttonType = useMemo((): ButtonModeType => {
    switch (props.type) {
      case "secondary":
        return {
          mode: "outlined",
          color: theme.colors.primary,
        };
      case "text":
        return {
          mode: "text",
          color: theme.colors.primary,
        };
      default:
        return {
          mode: "contained",
          color: theme.colors.primary,
        };
    }
  }, [props.type]);

  return (
    <PaperButton
      {...props}
      mode={buttonType.mode}
      color={buttonType.color}
      uppercase={buttonType.mode !== "text"}
    />
  );
};

export default Button;
