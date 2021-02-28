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
