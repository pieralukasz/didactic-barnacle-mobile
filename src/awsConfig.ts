import Config from "react-native-config";
import Amplify, { Analytics, Auth } from "aws-amplify";

export const authConfig = {
  Auth: {
    identityPoolId:
      Config.REACT_APP_DIDACTIC_BARNACLE_AWS_COGNITO_IDENTITY_POOL,
    region: Config.REACT_APP_DIDACTIC_BARNACLE_AWS_COGNITO_REGION,
    userPoolId: Config.REACT_APP_DIDACTIC_BARNACLE_AWS_COGNITO_USER_POOL_ID,
    userPoolWebClientId:
      Config.REACT_APP_DIDACTIC_BARNACLE_AWS_COGNITO_USER_POOL_CLIENT_ID,
    oauth: {
      domain: Config.REACT_APP_DIDACTIC_BARNACLE_AWS_COGNITO_USER_POOL_DOMAIN,
      responseType: "code",
      scope: [
        "phone",
        "email",
        "profile",
        "openid",
        "aws.cognito.signin.user.admin",
      ],
    },
  },
};

export const analyticsConfig = {
  AWSPinpoint: {
    appId: Config.REACT_APP_DIDACTIC_BARNACLE_AWS_PINPOINT_PROJECT,
    region: Config.REACT_APP_DIDACTIC_BARNACLE_AWS_PINPOINT_REGION,
    mandatorySignIn: false,
  },
};

const configureAws = (): void => {
  Auth.configure(authConfig);
  Analytics.configure(analyticsConfig);
  Amplify.Logger.LOG_LEVEL = "DEBUG";
};

export default configureAws;
