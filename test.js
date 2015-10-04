'use strict';
var fs = require('fs');
var csvParser = require('csv-parser');
var test = require('ava');
var processFile = require('./');

test('process file using filepath', function (t) {
	t.plan(2);

	processFile(__dirname + '/fixture.csv', csvParser()).then(function (data) {
		t.assert(data[0].foo === 'unicorn');
		t.assert(data[0].bar === 'cat');
	});
});

test('process file using buffer', function (t) {
	t.plan(2);
	var buf = fs.readFileSync(__dirname + '/fixture.csv');

	processFile(buf, csvParser()).then(function (data) {
		t.assert(data[0].foo === 'unicorn');
		t.assert(data[0].bar === 'cat');
	});
});
