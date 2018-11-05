# Stringify Clone

[![License][license-image]][license-url] [![version][npm-image]][npm-url] [![Build Status][circle-image]][circle-url]

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

---
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull; 
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &bull; 
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-image]: https://img.shields.io/github/license/ahmadnassri/node-stringify-clone.svg?style=for-the-badge&logo=circleci

[circle-url]: https://circleci.com/gh/ahmadnassri/workflows/node-stringify-clone
[circle-image]: https://img.shields.io/circleci/project/github/ahmadnassri/node-stringify-clone/master.svg?style=for-the-badge&logo=circleci

[npm-url]: https://www.npmjs.com/package/stringify-clone
[npm-image]: https://img.shields.io/npm/v/stringify-clone.svg?style=for-the-badge&logo=npm
