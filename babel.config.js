module.exports = {
  presets: ["module:@react-native/babel-preset"],
  // presets: ['module:metro-react-native-babel-preset'],
  // plugins: [
  //   [
  //     "module-resolver",
  //     {
  //       extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
  //       alias: {
  //         "@": "./src",
  //         "react-native-vector-icons": "react-native-vector-icons",
  //       },
  //     },
  //   ],
  // ],

  plugins: ['react-native-paper/babel'],
};

