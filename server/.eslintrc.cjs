module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'object-curly-newline': 'off',
    'no-tabs': 'off',
  },
};
