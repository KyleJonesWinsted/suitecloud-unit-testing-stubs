const customStubMap = {
  log: 'log',
  util: 'util',
  runtime: 'runtime',
  url: 'url',
  record: 'record',
  action: 'action',
  auth: 'auth',
  cache: 'cache',
  certificateControl: 'certificateControl',
  compress: 'compress',
  config: 'config',
  crypto: 'crypto',
  certificate: 'crypto/certificate',
  currency: 'currency',
  currentRecord: 'currentRecord',
  dataset: 'dataset',
  email: 'email',
  encode: 'encode',
  error: 'error',
  file: 'file',
  format: 'format',
  i18n: 'format/i18n',
  http: 'http',
  https: 'https',
  clientCertificate: 'https/clientCertificate',
  keyControl: 'keyControl',
  piremoval: 'piremoval',
  plugin: 'plugin',
  portlet: 'portlet',
  query: 'query',
  recordContext: 'recordContext',
  redirect: 'redirect',
  render: 'render',
  search: 'search',
  sftp: 'sftp',
  sso: 'sso',
  task: 'task',
  recognition: 'task/accounting/recognition',
  transaction: 'transaction',
  translation: 'translation',
  dialog: 'ui/dialog',
  message: 'ui/message',
  serverWidget: 'ui/serverWidget',
  workbook: 'workbook',
  workflow: 'workflow',
  xml: 'xml'
}

const CORE_STUBS_PATH = 'suitecloud-unit-testing-stubs/stubs'

const CORE_STUBS = Object.keys(customStubMap).map((filename) => {
  return {
    module: `N/${customStubMap[filename]}`,
    path: `<rootDir>/node_modules/${CORE_STUBS_PATH}/${filename}.js`
  }
});

module.exports = {
  customStubs: CORE_STUBS,
}