# Prolific Cleaner

## Installation

Add the following to `pakage.json` file.

```
"devDependencies": {
  "prolific-cleaner": "git+https://github.com/prolificinteractive/prolific-cleaner.git#master"
}
```

Run `npm install`

## Usage

Once it is installed you should notice that some lines were added to your package.json file.

```
"scripts": {
  "test": "node -e \"require('grunt').tasks(['test']);\"",
  "test-all": "node -e \"require('grunt').tasks(['test-all']);\"",
  "prepush": "npm test"
}
```

Now when you push your code npm test will run a suite of linters and code styling checks against 
your project.  You can also add a `precommit` script that will add run your script prior to commits 
as a pre-commit git hook.

For more info see [lintlovin](https://github.com/bloglovin/lintlovin).

## About And Contributing

This project is a light wrapper for [lintlovin](https://github.com/bloglovin/lintlovin).
All it does is install custom configuration files, preventing copy and pasting across projects.
The configuration files are found in the defaults folder and are used for the following.

* .editorconfig -> [lintspaces](https://github.com/schorfES/node-lintspaces)
* .jscsrc -> [jscs](http://jscs.info/rules.html)
* .jshintrc -> [jshint](http://jshint.com/docs/options/)
* Gruntfile.js -> Default Gruntfile to run everything this can be added to.

Feel free to make pull requests to update these.

## License

[LICENSE (MIT)](https://github.com/schorfES/node-lintspaces/blob/master/LICENSE)
