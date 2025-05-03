import eslintPluginImport from 'eslint-plugin-import'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'import/order': [
        'warn',
        {
          groups: [
            'builtin', // Node.js原生模組
            'external', // node_modules安裝的套件
            'internal', // 自定義的專案路徑
            ['parent', 'sibling', 'index'],
            'type', // 只導入型別的import
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always', // 不同group間空一行
          alphabetize: {
            order: 'asc', // 依字母排序
            caseInsensitive: true, // 大小寫不影響順序
          },
        },
      ],
    },
  }
]

export default eslintConfig
