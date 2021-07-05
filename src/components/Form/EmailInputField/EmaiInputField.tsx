import React from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

import TextInputField from "@components/Form/TextInputField";
import EmailIcon from "@assets/icons/EmailIcon.svg";

interface Props<T extends FieldValues> {
  autoFocus?: boolean;
  control: Control<T>;
  disabled?: boolean;
  error?: FieldError;
  errorMessage?: string;
  label?: string;
  name: Path<T>;
  placeholder?: string;
}

const EmailInputField = <T extends FieldValues>({
  autoFocus,
  control,
  disabled,
  error,
  errorMessage,
  label = "Email",
  name,
  placeholder = "Email",
}: Props<T>): JSX.Element => (
  <TextInputField
    autoFocus={autoFocus}
    control={control}
    disabled={disabled}
    error={!!error}
    errorMessage={errorMessage}
    label={label}
    name={name}
    placeHolder={placeholder}
    leftIcon={<EmailIcon />}
  />
);

export default EmailInputField;
