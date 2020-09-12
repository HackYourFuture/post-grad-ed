module.exports = {
  verbose: true,
  testRegex: ".*/__tests__/.*\\.test\\.js$",
  setupTestFrameworkScriptFile: "<rootDir>/config/jest_enzyme_react.js",
  collectCoverageFrom: ["**/src/**"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/assets/",
    "<rootDir>/src/amplify/",
    "<rootDir>/src/graphql/",
    "/__tests__/",
    "<rootDir>/src/__dev__/",
    "<rootDir>/src/styles/",
    "/styleguideData/",
    "/__testdata__/"
  ],
  coverageReporters: ["json", "lcov", "text", "clover", "text-summary"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js"
  },
  globals: {
    API_ENDPOINT: "",
    AWS_COGNITO_IDENTITYPOOL_ID: "",
    AWS_REGION: "",
    AWS_COGNITO_USERPOOL_ID: "",
    AWS_COGNITO_USERPOOL_WEBCLIENT_ID: "",
    AWS_STORAGE_BUCKET: "",
    IS_DEV: "",
    APP_VERSION: "",
    STAGE_NAME: "",
    BUGSNAG_API_KEY: "",
    USERSNAP_API_KEY: "",
    NYLAS_CLIENT_ID: "",
    FROALA_KEY: "",
    INTERCOM_APP_ID: "",
    HOTJAR_APP_ID: "",
    BASE_URL: "",
    IS_TEST: true
  }
};
