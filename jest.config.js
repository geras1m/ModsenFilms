/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import("jest").Config} */

module.exports = {
  preset: "ts-jest",
  clearMocks: true,
  testEnvironment: "jsdom",
  verbose: true,
  setupFiles: ["dotenv/config"],
  errorOnDeprecated: true,
  moduleFileExtensions: ["tsx", "ts", "js", "mjs", "cjs", "jsx", "json", "node"],
  modulePaths: ["<rootDir>src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "^@components/(.*)": "<rootDir>src/components/$1",
    "^@app-types/(.*)": "<rootDir>src/types/$1",
    "^@hooks/(.*)": "<rootDir>src/hooks/$1",
    "^@store/(.*)": "<rootDir>src/store/$1",
    "^@assets/(.*)": "<rootDir>src/assets/$1",
    "^@constants/(.*)": "<rootDir>src/constants/$1",
    "^@utils/(.*)": "<rootDir>src/utils/$1",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom", "./jest.setup.ts"],
};
