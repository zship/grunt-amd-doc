'use strict';


var fs = require('fs');
var path = require('path');
var constants = require('../constants.js');
var rjsconfig = require('../rjsconfig.js');
var requirejs = require(constants.rjs);
var grunt = require('grunt/lib/grunt.js');
var jsdom = require("jsdom");
var _ = grunt.utils._;
var Deferred = require('simply-deferred').Deferred;
var Types = require('./Types.js');


var deriveInheritance = function(graph) {

	var deferred = new Deferred();
	//console.log(fs.readFileSync('dist/joss.js').toString());

	jsdom.env({
		html: '<html><body></body></html>',
		src: [grunt.file.read('dist/joss.js')],
		done: function(err, window) {
			_.each(graph, function(obj, key) {
				if (!obj.constructor) {
					return; //namespace, not a class
				}

				var ctor = window.joss[key];

				if (!ctor || !ctor._meta) {
					return;
				}

				console.log('got here');

				var superclass = Types.getType(ctor._meta.bases[0].name).longName;
				//console.log(key, superclass);
				graph[key].constructor.augments = [superclass];
			});

			deferred.resolve();
		}
	});

	return deferred.promise();

};


module.exports = deriveInheritance;
