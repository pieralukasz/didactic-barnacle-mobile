import { ForgotPasswordRoute } from "@screens/Unprotected/routes";
import {
  ForgotPasswordEmailRoute,
  ForgotPasswordResetRoute,
  ForgotPasswordSuccessRoute,
  ForgotPasswordVerificationRoute,
} from "@screens/Unprotected/ForgotPassword/routes";

export type ForgotPasswordParams = {
  [ForgotPasswordRoute]: undefined;
  [ForgotPasswordEmailRoute]: undefined;
  [ForgotPasswordVerificationRoute]: undefined;
  [ForgotPasswordResetRoute]: undefined;
  [ForgotPasswordSuccessRoute]: undefined;
};
