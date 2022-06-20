// preset: 'ts-jest',
module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  testEnvironment: 'jsdom',
  collectCoverage: true,
  globals: {
    navigator: {
      userAgent: null
    }
  },
  coveragePathIgnorePatterns: [
    "home",
    "node-modules",
    "test"
  ],
  // 全局通过率
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -5
    }
  }
};