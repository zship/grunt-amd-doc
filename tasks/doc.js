module.exports = function(grunt) {
	'use strict';


	var amddoc = require('amd-doc');
	var forEachSeries = require('deferreds').forEachSeries;


	//idea: put a search box above class list that filters the class list
	grunt.registerMultiTask('amd-doc', 'Runs jsdoc', function() {

		var done = this.async();

		var options = this.options();
		options.requirejs = grunt.config.get('requirejs');
		options.verbose = grunt.option('verbose');
		options.out = options.out || 'doc/out';
		options.cache = options.cache || 'doc/cache';
		options.mixin = options.mixin || 'doc/mixin';

		forEachSeries(this.files, function(f) {
			var src = f.src.filter(function(filepath) {
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			});

			options.files = src;

			return amddoc.compile(options);
		}).then(done);

	});

};
