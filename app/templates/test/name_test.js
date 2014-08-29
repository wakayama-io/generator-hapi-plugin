'use strict';

var assert = require('assert'),
  hapi = require('hapi'),
  plugin = require('../');

describe('<%= safeSlugname %>', function() {
  var server = new hapi.Server();
  it('Plugin successfully loads', function(done) {
    server.pack.register(plugin, function(err) {

      assert.ok(!err);

      done();
    });
  });

  it('Plugin registers routes', function(done) {
    var table = server.table();

    assert.ok(table);
    assert.equal(table.length, 1);
    assert.equal(table[0].path, '/');

    done();
  });

  it('Plugin route responses', function(done) {
    var request = {
      method: 'GET',
      url: '/'
    };

    server.inject(request, function(res) {
      assert.equal(res.statusCode, 200);
      assert.equal(res.result, 'don\'t worry, be hapi!');
      done();
    });

  });
});
