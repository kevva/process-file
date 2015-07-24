'use strict';
var fs = require('fs');
var concatStream = require('concat-stream');

module.exports = function (file, stream, cb) {
	var isBuffer = Buffer.isBuffer(file);
	var concat = concatStream(end);
	var read;

	if (!isBuffer) {
		read = fs.createReadStream(file);
		read.on('error', cb);
	}

	function end(buf) {
		cb(null, buf);
	}

	concat.on('error', cb);
	stream.on('error', cb);

	if (isBuffer) {
		stream.end(file);
	} else {
		read.pipe(stream);
	}

	stream.pipe(concat);
};
