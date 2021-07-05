import { SignUpRoute } from "@screens/Unprotected/routes";
import {
  SignUpCreateAccountRoute,
  SignUpSuccessRoute,
  SignUpVerificationRoute,
} from "@screens/Unprotected/SignUp/routes";

export type SignUpNavigatorParams = {
  [SignUpRoute]: undefined;
  [SignUpCreateAccountRoute]: undefined;
  [SignUpVerificationRoute]: undefined;
  [SignUpSuccessRoute]: undefined;
};
