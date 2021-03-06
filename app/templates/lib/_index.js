/*
 * <%= props.name %>
 * <%= props.homepage %>
 *
 * Copyright (c) <%= currentYear %><% if (props.authorName) { %> <%= props.authorName %><% } %>
 * Licensed under the <%= props.license %> license.
 */

'use strict';

// Declare internals
var internals = {};

// Defaults
internals.defaults = {};

exports.register = function(plugin, options, next) {

  plugin.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
      reply('don\'t worry, be hapi!');
    },
    config:{
      description: 'Say hello!',
      notes: ['A route to greet the user'],
      tags: ['api', 'greeting']
    }
  });

  next();
};

exports.register.attributes = {
  pkg: require('../package.json')
};
