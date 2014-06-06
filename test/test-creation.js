/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('node generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('hapi-plugin:app', [
        '../../app'
      ]);
      this.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expectedFiles = [
      'lib/index.js',
      'test/mymodule_test.js',
      'example/simple.js',
      '.gitignore',
      '.jshintrc',
      '.travis.yml',
      '.editorconfig',
      'gulpfile.js',
      'index.js',
      'package.json',
      'README.md'
    ];

    var expectedContent = [
      ['lib/index.js', /https:\/\/github.com\/octocat\/mymodule/],
      ['index.js', /module.exports = require\('\.\/lib'\);/],
      ['package.json', /"name": "mymodule"/],
      ['package.json', /"gulp-lab": "0.0.7"/],
      ['package.json', /"lab"/],
      ['package.json', /"hapi"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com',
      'modules': [],
      'dependencies': []
    });

    this.app.run({}, function () {
      helpers.assertFile(expectedFiles);
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('creates expected files', function (done) {
    var expectedFiles = [
      'lib/index.js',
      'test/mymodule_test.js',
      'example/simple.js',
      '.gitignore',
      '.jshintrc',
      '.travis.yml',
      '.editorconfig',
      'gulpfile.js',
      'package.json',
      'README.md'
    ];

    var expectedContent = [
      ['lib/index.js', /http:\/\/example.com/],
      ['package.json', /"name": "mymodule"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com',
      'homepage': 'http://example.com',
      'modules': [],
      'dependencies': []
    });

    this.app.run({}, function () {
      helpers.assertFile(expectedFiles);
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('generator with releaseModule', function (done) {
    var expectedFiles = [
      'lib/index.js',
      'test/mymodule_test.js',
      'example/simple.js',
      '.gitignore',
      '.jshintrc',
      '.travis.yml',
      '.editorconfig',
      'gulpfile.js',
      'package.json',
      'README.md'
    ];

    var expectedContent = [
      ['package.json', /"gulp-bump"/],
      ['package.json', /"name": "mymodule"/],
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com',
      'modules': ['releaseModule'],
      'dependencies': []
    });

    this.app.run({}, function () {
      helpers.assertFile(expectedFiles);
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('generator with jscsModule', function (done) {
    var expectedFiles = [
      'lib/index.js',
      'test/mymodule_test.js',
      'example/simple.js',
      '.gitignore',
      '.jshintrc',
      '.jscs.json',
      '.travis.yml',
      '.editorconfig',
      'gulpfile.js',
      'package.json',
      'README.md'
    ];

    var expectedContent = [
      ['package.json', /"name": "mymodule"/],
      ['package.json', /"gulp-jscs"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com',
      'modules': ['jscsModule'],
      'dependencies': []
    });

    this.app.run({}, function () {
      helpers.assertFile(expectedFiles);
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('generator with package lodash', function (done) {
    var expectedContent = [
      ['package.json', /"lodash"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com',
      'modules': [],
      'dependencies': ['lodash']
    });

    this.app.run({}, function () {
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('generator with package q', function (done) {
    var expectedContent = [
      ['package.json', /"q"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com',
      'modules': [],
      'dependencies': ['q']
    });

    this.app.run({}, function () {
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('generator with package lodash and q', function (done) {
    var expectedContent = [
      ['package.json', /"lodash"/],
      ['package.json', /"q"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@example.com',
      'modules': [],
      'dependencies': ['lodash', 'q']
    });

    this.app.run({}, function () {
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

});
