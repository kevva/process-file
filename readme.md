# process-file [![Build Status](https://travis-ci.org/kevva/process-file.svg?branch=master)](https://travis-ci.org/kevva/process-file)

> Process a file and return the results as a callback


## Install

```
$ npm install --save process-file
```


## Usage

```js
var csvParser = require('csv-parser');
var processFile = require('process-file');

processFile('unicorn.csv', csvParser(), function (err, data) {
	console.log(data);
	//=> [{foo: 'bar', unicorn: 'awesome'}]
});
```


## API

### processFile(file, stream, callback)

#### file

*Required*  
Type: `string`, `buffer`

File to process.

#### stream

*Required*  
Type: `object`

Stream to process the file with.

#### callback(err, data)

*Required*  
Type: `function`

Returns the results in `data`.


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
