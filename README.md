# Stringify Clone [![version][npm-version]][npm-url] [![License][npm-license]][license-url]

> Wrapper for fast object cloning using `JSON.parse` & `JSON.stringify`. see [Benchmarks](https://github.com/ahmadnassri/node-clone-benchmark).

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

**Notes**:

- cannot clone `RegExp` *(returns `{}`)*
- `NaN` values will be converted to `null`
- `Date` objects will be converted to ISO strings (equivalent of running `Date.toISOString()`)
  - you can reconstruct the Date by calling `new Date(string)`

## Install

```bash
npm install --production --save stringify-clone
```

## API

### clone()

```js
var clone = require('stringify-clone')

clone({
  foo: 'bar'
})
```

----
> :copyright: [www.ahmadnassri.com](https://www.ahmadnassri.com/) &nbsp;&middot;&nbsp;
> License: [ISC][license-url] &nbsp;&middot;&nbsp;
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &nbsp;&middot;&nbsp;
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/

[travis-url]: https://travis-ci.org/ahmadnassri/stringify-clone
[travis-image]: https://img.shields.io/travis/ahmadnassri/stringify-clone.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/stringify-clone
[npm-license]: https://img.shields.io/npm/l/stringify-clone.svg?style=flat-square
[npm-version]: https://img.shields.io/npm/v/stringify-clone.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/stringify-clone.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/stringify-clone
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/stringify-clone.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/stringify-clone.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/stringify-clone
[david-image]: https://img.shields.io/david/ahmadnassri/stringify-clone.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/stringify-clone
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/stringify-clone/badge?style=flat-square
