'use strict';


var path = require('path');


var constants = {
	outdir: '',
	cachedir: '',
	mixindir: '',
	rjs: path.resolve(__dirname + '/lib/r.js'),
	fileHashesPath: '',
	jsdocExe: path.normalize(__dirname + '/../node_modules/jsdoc/jsdoc'),
	jadedir: path.resolve(__dirname + '/tpl')
};


constants.initialize = function(opts) {
	constants.outdir = opts.out || 'doc/out';
	constants.cachedir = opts.cache || 'doc/cache';
	constants.mixindir = opts.mixin || 'doc/mixin';

	constants.outdir = path.resolve(process.cwd() + '/' + constants.outdir);
	constants.cachedir = path.resolve(process.cwd() + '/' + constants.cachedir);
	constants.mixindir = path.resolve(process.cwd() + '/' + constants.mixindir);

	constants.fileHashesPath = path.resolve(constants.cachedir + '/cache.json');
};


module.exports = constants;
