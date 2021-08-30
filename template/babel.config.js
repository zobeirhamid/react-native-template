module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          resources: './src/resources',
          library: './src/library',
          components: './src/components',
          'test-utils': './jest/test-utils.ts',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
