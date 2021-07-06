import React from "react";
import { Control, FieldError, FieldValues, Path } from "react-hook-form";

import TextInputField from "@components/Form/TextInputField";
import PhoneIcon from "@assets/icons/PhoneIcon.svg";

interface Props<T extends FieldValues> {
  autoFocus?: boolean;
  control: Control<T>;
  disabled?: boolean;
  error?: FieldError;
  errorMessage?: string;
  label?: string;
  name: Path<T>;
  placeholder?: string;
  testId: string;
}

const PhoneNumberInputField = <T extends FieldValues>({
  autoFocus,
  control,
  disabled,
  error,
  errorMessage,
  label = "Phone",
  name,
  placeholder = "Phone",
  testId,
}: Props<T>): JSX.Element => (
  <TextInputField
    autoFocus={autoFocus}
    control={control}
    disabled={disabled}
    error={!!error}
    errorMessage={errorMessage}
    label={label}
    leftIcon={<PhoneIcon />}
    name={name}
    placeHolder={placeholder}
    testId={testId}
  />
);

export default PhoneNumberInputField;
