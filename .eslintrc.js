module.exports = {
  'env': {
    'browser': true,
    'node': true,  // 启用node环境
    'es6': true      // 启用es6语法
  },
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'semi': [2, 'never'],
    'eqeqeq': 'warn',
    'no-irregular-whitespace': 'warn',
    'no-empty-pattern': 'warn',
    'no-redeclare': 'warn',
    'quotes': ['error', 'single'],
    'indent': ['warn', 2],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
  }
}
