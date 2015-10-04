'use strict';
var fs = require('fs');
var concatStream = require('concat-stream');
var Promise = require('pinkie-promise');

module.exports = function (file, stream) {
	return new Promise(function (resolve, reject) {
		var isBuffer = Buffer.isBuffer(file);
		var concat = concatStream(resolve);
		var read;

		if (!isBuffer) {
			read = fs.createReadStream(file);
			read.on('error', reject);
		}

		concat.on('error', reject);
		stream.on('error', reject);

		if (isBuffer) {
			stream.end(file);
		} else {
			read.pipe(stream);
		}

		stream.pipe(concat);
	});
};
