# SuiteCloud Unit Test Stubs

Custom stubs for all Suitescript 2.x modules. 

This package has no standalone functionality. It is used in conjunction with the [@oracle/suitecloud-unit-testing](https://www.npmjs.com/package/@oracle/suitecloud-unit-testing) package.

## Installation

Can be installed via npm:

```bash
npm install suitecloud-unit-testing-stubs
```

Or by cloning into the node_modules folder in your project:

```bash
cd <your workspace root folder>/node_modules
git clone https://github.com/KyleJonesWinsted/suitecloud-unit-testing-stubs
```

To use the stubs in your tests, import `SuiteCloudJestStubs.js` and set `customStubs` in the build object to `SuiteCloudJestStubs.customStubs`. For more information regarding SuiteCloud Unit Testing configuration, see [@oracle/suitecloud-unit-testing](https://www.npmjs.com/package/@oracle/suitecloud-unit-testing).

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

## Usage

These stubs are organized slightly differently than the stubs included with the [@oracle/suitecloud-unit-testing](https://www.npmjs.com/package/@oracle/suitecloud-unit-testing) package. Instead of separating each Object type into its own importable file, Object constructors can be accessed as members of the parent module. This reduces the number of imports required and also allows multiple Objects of the same type to be mocked with different properties and mock return values.

For example:

```js
// Old way
import record from 'N/record';
import Record from 'N/record/instance';

jest.mock('N/record');
jest.mock('N/record/instance');

record.load.mockReturnValue(Record);
Record.getValue.mockReturnValue('foo');

// New way
import record from 'N/record';

jest.mock('N/record');

const rec = new record.Record;
rec.getValue.mockReturnValue('foo');

record.load.mockReturnValue(rec);
```