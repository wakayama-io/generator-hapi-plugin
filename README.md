# Hapi.js plugin generator
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Coverage Status][coveralls-image]][coveralls-url]

This generator creates a new hapi plugin with all the boilerplate you need to get started.


## Features

- Hapi plugin boilerplate
- Unit testing and code coverage with [Lab](https://github.com/spumko/lab) and [gulp-lab](https://github.com/otodockal/gulp-lab)
- Code linting with [gulp-jshint](https://github.com/spenceralger/gulp-jshint)
- JavaScript code style check with [gulp-jscs](https://github.com/sindresorhus/gulp-jscs) (optional)
- Npm versioning with [gulp-bump](https://github.com/stevelacy/gulp-bump) (optional)


## Installation

Install the generator by running: `npm install -g generator-hapi-plugin`


## Usage

Make a new directory, and cd into it.
Run the following command and follow the prompts.

```
yo hapi-plugin
```

_Note that this template will generate files in the current directory, so be sure to first change to a new directory if you don't want to overwrite existing files._



## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).

## Support

Should you have any problems or wishes for improvements, feel free to open up an [issue](https://github.com/wakayama-io/github-linker).

##Credits
This generator is based on the [generator-node-gulp](https://github.com/stefanbuck/generator-node-gulp).

## License

Copyright (c) 2014 Kentaro Wakayama. Licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License).

[npm-url]: https://npmjs.org/package/generator-hapi-plugin
[npm-image]: https://badge.fury.io/js/generator-hapi-plugin.svg
[travis-url]: https://travis-ci.org/wakayama-io/generator-hapi-plugin
[travis-image]: https://travis-ci.org/wakayama-io/generator-hapi-plugin.svg?branch=master
[daviddm-url]: https://david-dm.org/wakayama-io/generator-hapi-plugin.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/wakayama-io/generator-hapi-plugin
[coveralls-url]: https://coveralls.io/r/wakayama-io/generator-hapi-plugin
[coveralls-image]: https://coveralls.io/repos/wakayama-io/generator-hapi-plugin/badge.png
