/* eslint-disable */
//https://github.com/vercel/next.js/tree/canary/examples/with-jest
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: 'next',
  // preset: '../../jest.preset.js', //Default nx config
  preset: 'react-native-web', //https://necolas.github.io/react-native-web/docs/setup/#jest
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/next',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

  moduleNameMapper: {
    // Handle module aliases
    '@nx-samples-rn/shared': '<rootDir>/../../libs/shared/src/index.ts', //https://nextjs.org/docs/testing#setting-up-jest-with-babel
  },
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
