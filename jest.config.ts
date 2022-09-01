import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // "^.+\\.(js|jsx)$": "babel-jest"
  },
  moduleNameMapper: { "\\.(scss|css)$": "<rootDir>/src/__mocks__/styleMock.ts" },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts']
}
export default config
