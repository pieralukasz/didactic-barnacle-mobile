import { StackNavigationProp } from "@react-navigation/stack";

const resetNavigation = <
  // eslint-disable-next-line @typescript-eslint/ban-types
  NavigatorParamListType extends Record<string, object | undefined>
>(
  navigation:
    | StackNavigationProp<NavigatorParamListType, keyof NavigatorParamListType>
    | any,
  route: Extract<keyof NavigatorParamListType, string>
): void => {
  navigation.reset({
    ...navigation,
    routes: [
      {
        name: route,
      },
    ],
  });
};

export default resetNavigation;
