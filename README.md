# Stringify Clone

[![license][license-img]][license-url]
[![version][npm-img]][npm-url]
[![super linter][super-linter-img]][super-linter-url]
[![test][test-img]][test-url]
[![release][release-img]][release-url]

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-stringify-clone

[npm-url]: https://www.npmjs.com/package/stringify-clone
[npm-img]: https://badgen.net/npm/v/stringify-clone

[super-linter-url]: https://github.com/ahmadnassri/node-stringify-clone/actions?query=workflow%3Asuper-linter
[super-linter-img]: https://github.com/ahmadnassri/node-stringify-clone/workflows/super-linter/badge.svg

[test-url]: https://github.com/ahmadnassri/node-stringify-clone/actions?query=workflow%3Atest
[test-img]: https://github.com/ahmadnassri/node-stringify-clone/workflows/test/badge.svg

[release-url]: https://github.com/ahmadnassri/node-stringify-clone/actions?query=workflow%3Arelease
[release-img]: https://github.com/ahmadnassri/node-stringify-clone/workflows/release/badge.svg 

> Wrapper for fast object cloning using `JSON.parse` & `JSON.stringify`  

**IMPORTANT:**

> **THIS IS A [ONE LINE PACKAGE](./index.js), THERE IS NO REASON FOR YOU TO USE IT!**

**Notes**:
- cannot clone `RegExp` _(returns `{}`)_
- `NaN` values will be converted to `null`
- `Date` objects will be converted to ISO strings (equivalent of running `Date.toISOString()`)
  - you can reconstruct the Date by calling `new Date(string)`

## Install

```bash
npm install stringify-clone
```

## Usage

## API

### clone()

```js
const clone = require('stringify-clone')

clone({
  foo: 'bar'
})
```
