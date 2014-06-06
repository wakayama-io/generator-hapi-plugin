'use strict';

var Lab = require('lab'),
    Hapi = require('hapi');

var describe = Lab.experiment;
var it = Lab.test;
var expect = Lab.expect;
var before = Lab.before;
var after = Lab.after;

describe('<%= safeSlugname %>', function() {
    var server = new Hapi.Server();
    it('Plugin successfully loads', function(done) {
        server.pack.require('../', function(err) {

            expect(err).to.not.exist;

            done();
        });
    });

    it('Plugin registers routes', function(done) {
        var table = server.table();

        expect(table).to.have.length(1);
        expect(table[0].path).to.equal('/hello');

        done();
    });
});
