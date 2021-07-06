import React from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

import TextInputField from "@components/Form/TextInputField";
import PhoneIcon from "@assets/icons/PhoneIcon.svg";

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

const PhoneNumberInputField = <T extends FieldValues>({
  name,
  error,
  errorMessage,
  control,
  autoFocus,
  disabled,
  placeholder = "Phone",
  label = "Phone",
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
    leftIcon={<PhoneIcon />}
  />
);

export default PhoneNumberInputField;
