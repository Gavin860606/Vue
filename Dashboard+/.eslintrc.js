module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: [1, 'single'],
    quotes: [0, 'double'],
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'array-callback-return': 'off',
    'linebreak-style': 'off',
    'no-var': 'off',
    'no-unused-vars': 'off',
    'vars-on-top': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'off',
  },
};
