'use strict';


//var grunt = require('grunt/lib/grunt.js');
//var _ = grunt.utils._;
var util = require('./util.js');
var md = require('marked');
var hljs = require('highlight.js');


md.setOptions({
	gfm: true,
	pedantic: false,
	sanitize: false,
	highlight: function(code, lang) {
		if (lang === 'js' || !lang) {
			lang = 'javascript';
		}
		return hljs.highlight(lang, code).value;
	}
});


var parseMarkdown = function(graph) {
	util.getDescriptions(graph).forEach(function(obj) {
		obj.description = md.parse(obj.description);
	});

/*
 *    _.each(graph, function(clazz) {
 *        _.every(clazz, function(type, key) {
 *            if ((key === 'module' || key === 'constructor') && type.description) {
 *                type.description = md.parse(type.description);
 *                return true;
 *            }
 *
 *            _.each(type, function(member) {
 *                if (member && member.description) {
 *                    member.description = md.parse(member.description);
 *                }
 *            });
 *
 *            return true;
 *        });
 *    });
 */
};


module.exports = parseMarkdown;
