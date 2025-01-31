import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
})

const eslintConfig = [
  { ignores: ['coverage/**'] },
  { files: ['**/*.{ts,tsx}'] },
  ...compat.config({
    extends: [
      'next/core-web-vitals',
      'next/typescript',
      'prettier',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'import', 'simple-import-sort'],
  }),
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'unicorn/prevent-abbreviations': 'off',

      // React-specific Rules
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'warn',
      'react/no-direct-mutation-state': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',

      // React-hooks-specific Rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript-specific Rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Accessibility Rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/no-redundant-roles': 'warn',

      // Performance and Security
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-script-url': 'error',

      // Order imports using simple-import-sort
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // External libraries
            ['^react', '^next', '^(?!@)'],

            // Internal imports (e.g., components, utils)
            ['^@/components', '^@/utils'],

            // Styles
            ['^.+\\.css$'],
          ],
        },
      ],

      // unused or incorrect imports
      'import/no-unused-modules': 'error',
      'import/named': 'error',
      'import/no-named-as-default': 'off',
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'no-console': 'warn',
    },
  },
]

export default eslintConfig
