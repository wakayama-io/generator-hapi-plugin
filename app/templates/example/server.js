/*
 * <%= props.name %>
 * <%= props.homepage %>
 *
 * Copyright (c) <%= currentYear %><% if (props.authorName) { %> <%= props.authorName %><% } %>
 * Licensed under the <%= props.license %> license.
 */

'use strict';

var Hapi = require('hapi');
var Plugin = require('../');

var server = new Hapi.Server('localhost', 8000);

server.pack.register(Plugin, function() {
    server.start();
    console.log('Server running at ' + server.info.uri);
});
