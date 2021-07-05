import React from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

import TextInputField from "@components/Form/TextInputField";
import PasswordIcon from "@assets/icons/PasswordIcon.svg";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  errorMessage?: string;
  autoFocus?: boolean;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
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
}: Props<T>): JSX.Element => (
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
  />
);

export default PasswordInputField;
