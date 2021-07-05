import React from "react";
import { HelperText, TextInput } from "react-native-paper";
import { Control, FieldValues, Controller, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error: boolean;
  errorMessage?: string;
  label: string;
  autoFocus?: boolean;
  placeHolder?: string;
  multiline?: boolean;
  disabled?: boolean;
  leftIcon?: JSX.Element;
}

const TextInputField = <T extends FieldValues>({
  name,
  control,
  error,
  errorMessage,
  label,
  autoFocus = false,
  multiline = false,
  disabled = false,
  placeHolder = undefined,
  leftIcon,
}: Props<T>): JSX.Element => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, onBlur, value } }) => (
      <>
        <TextInput
          label={label}
          placeholder={placeHolder}
          mode="outlined"
          error={error}
          autoFocus={autoFocus}
          multiline={multiline}
          disabled={disabled}
          onChangeText={onChange}
          onBlur={onBlur}
          left={leftIcon && <TextInput.Icon name={() => leftIcon} />}
        />
        <HelperText type="error" visible={error}>
          {errorMessage}
        </HelperText>
      </>
    )}
  />
);

export default TextInputField;
