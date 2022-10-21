module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    extends: ['airbnb', 'plugin:prettier/recommended'],
    rules: {
      'no-underscore-dangle': [0],
      'no-useless-catch': [0],
      'no-shadow': [0],
      'eslint-disable consistent-return': [0],
    },
  };
  