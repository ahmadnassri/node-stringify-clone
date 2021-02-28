# Stringify Clone

Wrapper for fast object cloning using `JSON.parse` & `JSON.stringify`

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![super linter][super-linter-img]][super-linter-url]
[![test][test-img]][test-url]
[![semantic][semantic-img]][semantic-url]

**IMPORTANT:**

> **THIS IS A [ONE LINE PACKAGE][], THERE IS NO REASON FOR YOU TO USE IT!**

**Notes**:

-   cannot clone `RegExp` *(returns `{}`)*
-   `NaN` values will be converted to `null`
-   `Date` objects will be converted to ISO strings (equivalent of running `Date.toISOString()`)
    -   you can reconstruct the Date by calling `new Date(string)`

## Install

``` bash
npm install stringify-clone
```

## Usage

## API

### clone()

``` js
const clone = require('stringify-clone')

clone({
  foo: 'bar'
})
```

  [ONE LINE PACKAGE]: ./lib/index.js

----
> Author: [Ahmad Nassri](https://www.ahmadnassri.com/) &bull;
> Twitter: [@AhmadNassri](https://twitter.com/AhmadNassri)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/ahmadnassri/node-stringify-clone

[release-url]: https://github.com/ahmadnassri/node-stringify-clone/releases
[release-img]: https://badgen.net/github/release/ahmadnassri/node-stringify-clone

[super-linter-url]: https://github.com/ahmadnassri/node-stringify-clone/actions?query=workflow%3Asuper-linter
[super-linter-img]: https://github.com/ahmadnassri/node-stringify-clone/workflows/super-linter/badge.svg

[test-url]: https://github.com/ahmadnassri/node-stringify-clone/actions?query=workflow%3Atest
[test-img]: https://github.com/ahmadnassri/node-stringify-clone/workflows/test/badge.svg

[semantic-url]: https://github.com/ahmadnassri/node-stringify-clone/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
