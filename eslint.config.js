import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from "eslint-config-prettier";
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(["dist", "node_modules", "build", "*.config.js"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // 중복 import 방지
      "no-duplicate-imports": "error",
      // console 경고 (warn, error, info는 허용)
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      // 사용 안 하는 변수 (_로 시작하면 무시)
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      // 여러 줄 공백 금지
      "no-multiple-empty-lines": "error",
      // 정의 안 된 변수 사용 금지
      "no-undef": "error",
      // 불필요한 공백 제거
      "no-trailing-spaces": "error",
    },
  },
]);