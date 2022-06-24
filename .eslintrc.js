module.exports = {
  env: {
    browser: true,
    es2021: true,
    'cypress/globals': true,
    'jest/globals': true,
  },
  extends: [
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'plugin:jest-dom/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'cypress',
    'jest-dom',
    'jest',
  ],
  overrides: [
    {
      files: ['**/*.test.js'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 0,
  },
};
