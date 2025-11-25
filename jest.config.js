const config = {
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "./*/*.js"
  ],
  coveragePathIgnorePatterns: [
    "./*/script.js",
  ],
  collectCoverage: false,
  coverageProvider: "v8",
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  }
};
module.exports = config;