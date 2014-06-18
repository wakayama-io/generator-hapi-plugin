/*
 * <%= props.name %>
 * <%= props.homepage %>
 *
 * Copyright (c) <%= currentYear %><% if (props.authorName) { %> <%= props.authorName %><% } %>
 * Licensed under the <%= props.license %> license.
 */

'use strict';

// Following the 'Node.js require(s) best practices' by
// http://www.mircozeiss.com/node-js-require-s-best-practices/

// // Nodejs libs
// var fs = require('fs'),
//
// // External libs
// debug = require('debug'),
//
// // Internal libs
// data = require('./data.js');

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    }
  });

  next();
};


exports.register.attributes = {

    pkg: require('../package.json')
};
