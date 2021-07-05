import { ForgotPasswordRoute } from "@screens/Unprotected/routes";
import {
  ForgotPasswordEmailRoute,
  ForgotPasswordSuccessRoute,
  ForgotPasswordVerificationCodeRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

export type ForgotPasswordParams = {
  [ForgotPasswordRoute]: undefined;
  [ForgotPasswordEmailRoute]: undefined;
  [ForgotPasswordVerificationCodeRoute]: undefined;
  [ForgotPasswordSuccessRoute]: undefined;
};
