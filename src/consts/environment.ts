import Config from "react-native-config";

const env = Config.REACT_APP_DIDACTIC_BARNACLE_ENVIRONMENT;

export default {
  development: env?.endsWith("test") || env === "deve",
  graphqlApi: Config.REACT_APP_DIDACTIC_BARNACLE_AWS_APPSYNC_URL,
};
