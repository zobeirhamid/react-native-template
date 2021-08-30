module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^library/(.*)$': '<rootDir>/src/library/$1',
    '^resources/(.*)$': '<rootDir>/src/resources/$1',
    'test-utils': '<rootDir>/jest/test-utils.ts',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' + '|@react-native' + ')/)',
  ],
  setupFiles: ['./jest/jest-setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
