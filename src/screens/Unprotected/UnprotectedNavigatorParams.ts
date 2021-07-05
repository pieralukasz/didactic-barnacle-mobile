import { UnprotectedRoute } from "@screens/routes";
import {
  ForgotPasswordRoute,
  SignInRoute,
  SignUpRoute,
} from "@screens/Unprotected/routes";

export type UnprotectedNavigatorParams = {
  [UnprotectedRoute]: undefined;
  [SignInRoute]: undefined;
  [SignUpRoute]: undefined;
  [ForgotPasswordRoute]: undefined;
};
