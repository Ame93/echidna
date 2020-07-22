/**
 * @file Check if URL is in whitelist.
 */
'use strict';

var List = require('immutable').List;
var Checker = require('third-party-resources-checker');

/**
 * @exports lib/third-party-resources-checker
 */

var ThirdPartyResourcesChecker = {};

ThirdPartyResourcesChecker.check = function (url, whitelist) {
  return Checker.check(url, whitelist).then(function (result) {
    return new List(result[1]);
  });
};

module.exports = ThirdPartyResourcesChecker;
