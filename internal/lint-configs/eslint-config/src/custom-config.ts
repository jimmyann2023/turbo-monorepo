import type { Linter } from 'eslint';

const restrictedImportIgnores = [
  '**/vite.configs.mts',
  '**/tailwind.configs.mjs',
  '**/postcss.configs.mjs',
];

const customConfig: Linter.Config[] = [
  // shadcn-ui 内部组件是自动生成的，不做太多限制
  {
    files: ['packages/@core/ui-kit/shadcn-ui/**/**'],
    rules: {
      'vue/require-default-prop': 'off',
    },
  },
  {
    files: [
      'apps/**/**',
      'packages/effects/**/**',
      'packages/utils/**/**',
      'packages/types/**/**',
      'packages/locales/**/**',
    ],
    ignores: restrictedImportIgnores,
    rules: {
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-objects': 'off',
    },
  },
  {
    // apps内部的一些基础规则
    files: ['apps/**/**'],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['#/api/*'],
              message:
                'The #/api package cannot be imported, please use the @core package itself',
            },
            {
              group: ['#/layouts/*'],
              message:
                'The #/layouts package cannot be imported, please use the @core package itself',
            },
            {
              group: ['#/locales/*'],
              message:
                'The #/locales package cannot be imported, please use the @core package itself',
            },
            {
              group: ['#/stores/*'],
              message:
                'The #/stores package cannot be imported, please use the @core package itself',
            },
          ],
        },
      ],
      'perfectionist/sort-interfaces': 'off',
    },
  },
  {
    // @core内部组件，不能引入@repo/* 里面的包
    files: ['packages/@core/**/**'],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@repo/*'],
              message:
                'The @core package cannot import the @repo package, please use the @core package itself',
            },
          ],
        },
      ],
    },
  },
  {
    // @core/shared内部组件，不能引入@repo/* 或者 @repo-core/* 里面的包
    files: ['packages/@core/base/**/**'],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@repo/*', '@repo-core/*'],
              message:
                'The @repo-core/shared package cannot import the @repo package, please use the @core/shared package itself',
            },
          ],
        },
      ],
    },
  },

  {
    // 不能引入@repo/*里面的包
    files: [
      'packages/types/**/**',
      'packages/utils/**/**',
      'packages/icons/**/**',
      'packages/constants/**/**',
      'packages/styles/**/**',
      'packages/stores/**/**',
      'packages/preferences/**/**',
      'packages/locales/**/**',
    ],
    ignores: restrictedImportIgnores,
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@repo/*'],
              message:
                'The @repo package cannot be imported, please use the @core package itself',
            },
          ],
        },
      ],
    },
  },
  // 后端模拟代码，不需要太多规则
  {
    files: ['apps/backend-mock/**/**', 'docs/**/**'],
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off',
      'n/no-extraneous-import': 'off',
      'n/prefer-global/buffer': 'off',
      'n/prefer-global/process': 'off',
      'no-console': 'off',
      'unicorn/prefer-module': 'off',
    },
  },
  {
    files: ['**/**/playwright.configs.ts'],
    rules: {
      'n/prefer-global/buffer': 'off',
      'n/prefer-global/process': 'off',
      'no-console': 'off',
    },
  },
  {
    files: ['internal/**/**', 'scripts/**/**'],
    rules: {
      'no-console': 'off',
    },
  },
];

export { customConfig };