'use strict';
const fs = require('fs');
const concatStream = require('concat-stream');

module.exports = function (file, stream) {
	return new Promise((resolve, reject) => {
		const isBuffer = Buffer.isBuffer(file);
		const concat = concatStream(resolve);

		let read;

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
