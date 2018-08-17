module.exports = {
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        "**/pages/*.js",
        "**/react-components/**/*.jsx",
        "**/js/**/*.js"
    ],
    coverageReporters: ["json", "html"],
    testPathIgnorePatterns: [
        "/__mocks__/",
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/__mocks__/assetMock.js",
      "\\.(css|sass)$": "<rootDir>/__mocks__/styleMock.js"
    }
};