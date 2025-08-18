import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      prettierConfig, // 禁用 ESLint 中和 Prettier 冲突的规则
    ],
    plugins: {
      prettier,
    },
    rules: {
      'prettier/prettier': 'warn', // 让 Prettier 作为 ESLint 规则运行
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']], // 配置 @ 指向 src
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // 支持的文件扩展名
        },
      },
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['erasableSyntaxOnly'],
        },
      },
    },
  },
])
