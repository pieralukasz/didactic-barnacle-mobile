import React from "react";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Form from "@components/Form";
import VerificationCodeInputField from "@components/Form/VerificationCodeInputField";

import signUpVerificationFormValidationSchema from "./signUpVerificationFormValidationSchema";
import SignUpVerificationFormState from "./SignUpVerificationFormState";

interface SignUpVerificationFormProps {
  onSubmit: (data: SignUpVerificationFormState) => void;
}

const SignUpVerificationForm: React.FC<SignUpVerificationFormProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpVerificationFormState>({
    resolver: yupResolver(signUpVerificationFormValidationSchema()),
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  return (
    <Form
      submitButton={{
        text: "Submit",
        disabled: !isValid,
        onSubmit: handleSubmit(onSubmit),
      }}>
      <VerificationCodeInputField
        control={control}
        name="verificationCode"
        error={errors.verificationCode}
        errorMessage={errors.verificationCode?.message}
      />
    </Form>
  );
};

export default SignUpVerificationForm;
