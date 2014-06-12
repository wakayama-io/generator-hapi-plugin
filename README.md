# Hapi.js plugin generator
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Coverage Status][coveralls-image]][coveralls-url]

This generator creates a new hapi plugin with all the boilerplate you need to get started.


## Features

- Hapi plugin boilerplate
- Unit testing and code coverage with [Lab](https://github.com/spumko/lab)
- Code linting
- Watch tasks for tests and development server
- JavaScript code style check (optional)
- Npm versioning (optional)


## Installation

Install the generator by running: `npm install -g generator-hapi-plugin`


## Usage

Make a new directory, and cd into it.
Run the following command and follow the prompts.

```
yo hapi-plugin
```

_Note that this template will generate files in the current directory, so be sure to first change to a new directory if you don't want to overwrite existing files._


## Development

Run the following command from the root of the project:

```
gulp develop
```

The develop task starts a development hapi server which requires your plugin.
The server gets restarted on changes made in your project folder.


## Release

```
gulp bump
```

The bump task increments the plugin version in the package.json file on a patch base.
You can use the type parameter to specify the type of release:

```
gulp bump --type (major|minor|patch|prerelease)
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).

## Support

Should you have any problems or wishes for improvements, feel free to open up an [issue](https://github.com/wakayama-io/generator-hapi-plugin).

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
