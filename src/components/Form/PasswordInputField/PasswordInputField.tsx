import React, { useCallback, useState } from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

import TextInputField from "@components/Form/TextInputField";
import PasswordIcon from "@assets/icons/PasswordIcon.svg";
import PasswordInvisibleIcon from "@assets/icons/PasswordInvisibleIcon.svg";
import PasswordVisibilityIcon from "@assets/icons/PasswordVisibleIcon.svg";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  errorMessage?: string;
  autoFocus?: boolean;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  showVisibility?: boolean;
  testId: string;
}

const PasswordInputField = <T extends FieldValues>({
  name,
  error,
  errorMessage,
  control,
  autoFocus,
  disabled,
  placeholder = "Password",
  label = "Password",
  showVisibility = true,
  testId,
}: Props<T>): JSX.Element => {
  const [visibility, setVisibility] = useState<boolean>(true);

  const renderEyeIcon = useCallback(() => {
    return visibility ? <PasswordVisibilityIcon /> : <PasswordInvisibleIcon />;
  }, [visibility]);

  return (
    <TextInputField
      name={name}
      control={control}
      error={!!error}
      errorMessage={errorMessage}
      label={label}
      placeHolder={placeholder}
      disabled={disabled}
      autoFocus={autoFocus}
      leftIcon={<PasswordIcon />}
      rightIcon={showVisibility ? renderEyeIcon() : undefined}
      secureTextEntry={visibility}
      onPressRightIcon={() => setVisibility(!visibility)}
      testId={testId}
    />
  );
};

export default PasswordInputField;
