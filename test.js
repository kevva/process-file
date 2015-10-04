import fs from 'fs';
import csvParser from 'csv-parser';
import test from 'ava';
import processFile from './';

test('process file using filepath', async t => {
	t.plan(2);

	const data = await processFile(__dirname + '/fixture.csv', csvParser());

	t.is(data[0].foo, 'unicorn');
	t.is(data[0].bar, 'cat');
});

test('process file using buffer', async t => {
	t.plan(2);

	const buf = fs.readFileSync(__dirname + '/fixture.csv');
	const data = await processFile(buf, csvParser());

	t.is(data[0].foo, 'unicorn');
	t.is(data[0].bar, 'cat');
});
