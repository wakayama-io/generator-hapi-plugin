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
      'example/server.js',
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
      ['package.json', /"gulp-mocha"/],
      ['package.json', /"gulp-istanbul"/],
      ['package.json', /"hapi"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@cat.com',
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
      'example/server.js',
      '.gitignore',
      '.jshintrc',
      '.travis.yml',
      '.editorconfig',
      'gulpfile.js',
      'package.json',
      'README.md'
    ];

    var expectedContent = [
      ['lib/index.js', /http:\/\/octocat.com/],
      ['package.json', /"name": "mymodule"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@cat.com',
      'homepage': 'http://octocat.com',
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
      'example/server.js',
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
      'authorEmail': 'octo@cat.com',
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
      'example/server.js',
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
      'authorEmail': 'octo@cat.com',
      'modules': ['jscsModule'],
      'dependencies': []
    });

    this.app.run({}, function () {
      helpers.assertFile(expectedFiles);
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('generator with package lout', function (done) {
    var expectedContent = [
      ['package.json', /"lout"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@cat.com',
      'modules': [],
      'dependencies': ['lout']
    });

    this.app.run({}, function () {
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('generator with package joi', function (done) {
    var expectedContent = [
      ['package.json', /"joi"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@cat.com',
      'modules': [],
      'dependencies': ['joi']
    });

    this.app.run({}, function () {
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

  it('generator with package lout and joi', function (done) {
    var expectedContent = [
      ['package.json', /"lout"/],
      ['package.json', /"joi"/]
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
      'description': 'awesome module',
      'license': 'MIT',
      'githubUsername': 'octocat',
      'authorName': 'Octo Cat',
      'authorEmail': 'octo@cat.com',
      'modules': [],
      'dependencies': ['lout', 'joi']
    });

    this.app.run({}, function () {
      helpers.assertFileContent(expectedContent);
      done();
    });
  });

});
