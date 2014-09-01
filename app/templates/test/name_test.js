'use strict';

var assert = require('assert'),
  hapi = require('hapi'),
  plugin = require('../');

describe('<%= slugname %>', function() {

  var server;

  beforeEach(function () {
    server = new hapi.Server();
  });

  it('loads successfully', function(done) {
    server.pack.register(plugin, function(err) {

      assert.ok(!err);

      done();
    });
  });

  it('adds a route to /hello', function(done) {
    var table;

    server.pack.register(plugin, function() {

      table = server.table();

      assert.ok(table);
      assert.equal(table.length, 1);
      assert.equal(table[0].path, '/hello');

      done();
    });
  });

  it('responses to GET request on /hello', function(done) {
    var request = {
      method: 'GET',
      url: '/hello'
    };

    server.pack.register(plugin, function() {

      server.inject(request, function(res) {

        assert.equal(res.statusCode, 200);
        assert.equal(res.result, 'don\'t worry, be hapi!');

        done();
      });
    });
  });
});
