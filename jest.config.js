const config = {
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "task-7/paragagraphs.js"
  ],
  collectCoverage: true,
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