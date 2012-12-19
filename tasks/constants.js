var path = require('path');


var cachedir = path.resolve(__dirname + '/cache');


var constants = {
	docdir: path.resolve(process.cwd() + '/doc'),
	cachedir: cachedir,
	rjs: path.resolve(__dirname + '/lib/r.js'),
	fileHashesPath: path.resolve(cachedir + '/cache.json'),
	jsdocExe: path.resolve(process.cwd() + '/node_modules/jsdoc/jsdoc'),
	jadedir: path.resolve(__dirname + '/tpl')
};


module.exports = constants;
