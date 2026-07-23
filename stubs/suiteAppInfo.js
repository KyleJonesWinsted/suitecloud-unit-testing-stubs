module.exports = (function () {

  // N/suiteAppInfo Module Members

  var suiteAppInfo = function() {};

  // Method

  suiteAppInfo.prototype.isBundleInstalled = function(options) {};

  suiteAppInfo.prototype.isSuiteAppInstalled = function(options) {};

  suiteAppInfo.prototype.listBundlesContainingScripts = function(options) {};

  suiteAppInfo.prototype.listInstalledBundles = function() {};

  suiteAppInfo.prototype.listInstalledSuiteApps = function() {};

  suiteAppInfo.prototype.listSuiteAppsContainingScripts = function(options) {};

  return new suiteAppInfo();

})();
