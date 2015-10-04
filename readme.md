# process-file [![Build Status](https://travis-ci.org/kevva/process-file.svg?branch=master)](https://travis-ci.org/kevva/process-file)

> Process a file and return the results as a callback


## Install

```
$ npm install --save process-file
```


## Usage

```js
const csvParser = require('csv-parser');
const processFile = require('process-file');

processFile('unicorn.csv', csvParser()).then(data => {
	console.log(data);
	//=> [{foo: 'bar', unicorn: 'awesome'}]
});
```


## API

### processFile(file, stream)

Returns a promise that resolves to your processed result.

#### file

*Required*  
Type: `string`, `buffer`

File to process.

#### stream

*Required*  
Type: `object`

Stream to process the file with.


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
