/*
 * @Author: Yahui.Jiang
 * @Date: 2020-12-17 16:43:12
 * @LastEditors: Yahui.Jiang
 * @LastEditTime: 2021-07-02 11:26:03
 * @Description: 
 */
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
      branches: 98,
      functions: 100,
      lines: 100,
      statements: -5
    }
  }
};