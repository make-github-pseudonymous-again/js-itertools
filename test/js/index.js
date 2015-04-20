
var pkg = require('aureooms-node-package');

var opt = {
	src     : __dirname + '/src/',
	exports : module.exports,
	base    : 0
};

require( '../../node_modules/aureooms-node-package/node_modules/babel-core/register.js' ) ;
pkg.include(opt);
