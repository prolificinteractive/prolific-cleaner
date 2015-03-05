/*jslint node: true */
'use strict';

var fs = require('fs'),
  path = require('path'),
  crypto = require('crypto');

var root = path.resolve(__dirname, '../');
if (path.basename(path.dirname(root)) !== 'node_modules') {
  process.exit(0);
}
process.chdir(path.resolve(root, '../../'));

// Install default .editiorconfig
var editorconfig = fs.readFileSync(path.join(__dirname, '../defaults/.editorconfig'), {encoding: 'utf8'});
fs.writeFileSync('.editorconfig', editorconfig);

// Install default .jshintrc
var jshintrc = fs.readFileSync(path.join(__dirname, '../defaults/.jshintrc'), {encoding: 'utf8'});
fs.writeFileSync('.jshintrc', jshintrc);

// Install default .jscsrc
var jscsrc = fs.readFileSync(path.join(__dirname, '../defaults/.jscsrc'), {encoding: 'utf8'});
fs.writeFileSync('.jscsrc', jscsrc);

// If there is no grunt file present install the default one 
if (!fs.existsSync('Gruntfile.js')) {
  var grunt = fs.readFileSync(path.join(__dirname, '../defaults/Gruntfile.js'), {
    encoding: 'utf8'
  });
  fs.writeFileSync('Gruntfile.js', grunt);
}


