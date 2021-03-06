import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';
import test from 'ava';
import m from './';

test('process file using filepath', async t => {
	const data = await m(path.join(__dirname, 'fixture.csv'), csvParser());
	t.is(data[0].foo, 'unicorn');
	t.is(data[0].bar, 'cat');
});

test('process file using buffer', async t => {
	const buf = fs.readFileSync(path.join(__dirname, 'fixture.csv'));
	const data = await m(buf, csvParser());
	t.is(data[0].foo, 'unicorn');
	t.is(data[0].bar, 'cat');
});
