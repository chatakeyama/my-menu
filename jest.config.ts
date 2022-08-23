import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: { "\\.(scss|css)$": "<rootDir>/src/__mocks__/styleMock.js" }
}
export default config
