# SuiteCloud Unit Test Stubs

Custom stubs for all Suitescript 2.x modules. 

This package has no standalone functionality. It is used in conjunction with the @oracle/suitecloud-unit-testing package.

## Installation

jest.config.js
```js
const SuiteCloudJestConfiguration = require("@oracle/suitecloud-unit-testing/jest-configuration/SuiteCloudJestConfiguration");
const SuiteCloudJestStubs = require("suitecloud-unit-testing-stubs/SuiteCloudJestStubs");

module.exports = SuiteCloudJestConfiguration.build({
  projectFolder: 'src',     // or your project folder
  projectType: SuiteCloudJestConfiguration.ProjectType.ACP,
  customStubs: SuiteCloudJestStubs.customStubs,
});
```