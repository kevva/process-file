'use strict';
var fs = require('fs');
var concatStream = require('concat-stream');

module.exports = function (file, stream, cb) {
	var read = fs.createReadStream(file);
	var concat = concatStream(end);

	function end(buf) {
		cb(null, buf);
	}

	concat.on('error', cb);
	read.on('error', cb);
	stream.on('error', cb);

	stream.pipe(concat);
	read.pipe(stream);
};
