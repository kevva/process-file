'use strict';
var csvParser = require('csv-parser');
var test = require('ava');
var processFile = require('./');

test(function (t) {
	t.plan(3);

	processFile(__dirname + '/fixture.csv', csvParser(), function (err, data) {
		t.assert(!err, err);
		t.assert(data[0].foo === 'unicorn');
		t.assert(data[0].bar === 'cat');
	});
});
