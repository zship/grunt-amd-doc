(function() {
	'use strict';

	var grunt = require('grunt');
	var _ = grunt.utils._;


	/**
	 * Transform globbed config values into lists of files
	 * @param {Array|String} arr
	 */
	exports.expand = function(arr) {
		arr = arr || [];
		var files = [];

		if (_.isString(arr)) {
			arr = [arr];
		}

		arr.forEach(function(val) {
			files = files.concat(grunt.file.expandFiles(val));
		});

		return _.uniq(files);
	};

})();
