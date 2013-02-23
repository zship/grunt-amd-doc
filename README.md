grunt-amd-doc
=============

grunt-amd-doc is a grunt plugin for
[amd-doc](https://github.com/zship/amd-doc), a JavaScript documentation
generator for AMD-based projects.


Installation
-------------

From the same directory as your Gruntfile, run

```
npm install grunt-amd-doc
```

Then add the following line to your Gruntfile:

```js
grunt.loadNpmTasks('grunt-amd-doc');
```

You can verify that the task is available by running `grunt --help` and
checking that "amd-doc" is under "Available tasks".


Usage
-----

grunt-amd-doc reads two sections of your config: `amd-doc` and `requirejs`.
`amd-doc` can contain these properties (example from
[deferreds.js](https://github.com/zship/deferreds.js)):

```js
'amd-doc': {
	//globbing-supported String or Array of Strings with gruntfile-relative
	//files to process for documentation
	include: 'src/deferreds/**/*.js',

	//directory to output generated HTML (default = 'doc/out')
	out: 'doc/out',

	//directory to store jsdoc cache (default = 'doc/cache')
	cache: 'doc/cache',

	//directory to look for markdown mixins (default = 'doc/mixin')
	mixin: 'doc/mixin',

	//github URL where source is available. the file path and line number of
	//each documented variable will be added to this to make source links.
	repoview: 'https://github.com/zship/deferreds.js/blob/develop/',

	//Array of Type (see tasks/doc/Types.js) objects to transform into links
	//when used as parameter types, return types, or description namepaths
	types: (function() {
		var types = [];

		//make all built-in types link to their MDN pages
		['Number', 'String', 'Object', 'Function', 'Array', 'RegExp', 'Boolean'].forEach(function(val) {
			types.push({
				name: val,
				link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/' + val
			});
		});

		types.push({
			name: 'Any',
			link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects'
		});

		types.push({
			name: 'void',
			link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/undefined'
		});

		types.push({
			name: 'Element',
			link: 'https://developer.mozilla.org/en-US/docs/DOM/element'
		});

		types.push({
			name: 'Constructor',
			link: 'https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/constructor'
		});

		types.push({
			name: 'jQuery',
			link: 'http://api.jquery.com/jQuery/'
		});

		types.push({
			name: 'require',
			link: 'http://requirejs.org/'
		});

		types.push({
			//any name matching this RegExp (with name.search()) will be given
			//the following link
			regexp: /amd-utils\/.*/,
			link: 'http://millermedeiros.github.com/amd-utils/'
		});

		return types;
	})()
},
```

`requirejs` is a standard [r.js configuration
object](https://github.com/jrburke/r.js/blob/master/build/example.build.js).
grunt-amd-doc uses `basePath`, `paths`, and `packages` (all optional) to
transform file names to AMD module names.

Once these options are in place, `grunt amd-doc` will run amd-doc.
