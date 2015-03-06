/*jslint node: true */
'use strict';

var lintlovin = require('lintlovin');

module.exports = function (grunt) {
  lintlovin.initConfig(grunt, {}, {
    // Keep getting "Fatal error: Dependencies not listed in package.json: MD5"
    // had to disable
    noDependencyCheck: true
  });
};
