const EXCLUDED_FOLDERS = [
  '<rootDir>/.next/',
  '<rootDir>/coverage/',
  '<rootDir>/node_modules/',
];

const COVERAGE = [
  '<rootDir>/**/*.js',
  '!<rootDir>/**/test-index.js',
  '!<rootDir>/jest.config.js',
  '!<rootDir>/next.config.js',
];

module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^actions(.*)$': '<rootDir>/actions/$1',
    '^components(.*)$': '<rootDir>/components/$1',
    '^mocks(.*)$': '<rootDir>/mocks/$1',
    '^pages(.*)$': '<rootDir>/pages/$1',
    '^reducers(.*)$': '<rootDir>/reducers/$1',
    '^selectors(.*)$': '<rootDir>/selectors/$1',
    '^utils(.*)$': '<rootDir>/utils/$1',
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  collectCoverageFrom: COVERAGE,
  coveragePathIgnorePatterns: EXCLUDED_FOLDERS,
  testPathIgnorePatterns: EXCLUDED_FOLDERS,
};
