module.exports = function(grunt) {
	'use strict';


	var amddoc = require('amd-doc');


	//idea: put a search box above class list that filters the class list
	grunt.registerTask('amd-doc', 'Runs jsdoc', function() {

		var done = this.async();
		var config = grunt.config.get(this.name);
		config.requirejs = grunt.config.get('requirejs');
		config.verbose = grunt.option('verbose');

		config.out = config.out || 'doc/out';
		config.cache = config.cache || 'doc/cache';
		config.mixin = config.mixin || 'doc/mixin';

		amddoc.compile(config).then(function() {
			done();
		});

	});

};
