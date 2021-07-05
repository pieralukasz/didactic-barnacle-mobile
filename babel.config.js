module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@consts": "./src/consts",
            "@enums": "./src/types/enums",
            "@hooks": "./src/hooks",
            "@features": "./src/features",
            "@generated": "./src/types/generated",
            "@interfaces": "./src/types/interfaces",
            "@i18n": "./src/i18n",
            "@layouts": "./src/layouts",
            "@mocks": "./src/mocks",
            "@screens": "./src/screens",
            "@themes": "./src/themes",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
