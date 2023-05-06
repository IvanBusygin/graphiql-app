const isProd = process.env.NODE_ENV === 'production';
console.log('mode:', process.env.NODE_ENV);

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react-refresh',
    'react',
    'react-hooks',
    'import',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'no-console': [isProd ? 'error' : 'off', { 'allow': ['error'] }],
    'no-debugger': isProd ? 'error' : 'off',
    'react-refresh/only-export-components': 'warn',
    'eqeqeq': 2,
    'react/jsx-curly-brace-presence': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
  },
  'settings': {
    'react': { 'pragma': 'React', 'version': 'detect' },
  },
};
