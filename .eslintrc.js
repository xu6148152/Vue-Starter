// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 0,
    'comma-dangle': 0,
    'array-bracket-spacing': 0,
    'semi': 0,
    'spaced-comment': 0,
    'arrow-parens': 0,
    'consistent-return': 0,
    'no-alert': 0,
    'arrow-body-style': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'quotes': 0,
    'no-undef': 0,
    'quote-props': 0,
    'one-var': 0,
    'no-var': 0
  }
}
