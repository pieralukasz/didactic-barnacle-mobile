import {
  ErrorRoute,
  MainRoute,
  ProtectedRoute,
  UnprotectedRoute,
} from "@screens/routes";

export type MainNavigatorParams = {
  [MainRoute]: undefined;
  [ProtectedRoute]: undefined;
  [UnprotectedRoute]: undefined;
  [ErrorRoute]: undefined;
};
