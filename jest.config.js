module.exports = {
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\.js$': 'babel-jest',
    '^.+\.css$': 'jest-transform-css',
    '^.+\.(jsx|js)$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js'
  }
};