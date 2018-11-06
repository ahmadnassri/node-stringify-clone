const clone = require('..')
const tap = require('tap')

tap.test('simple', assert => {
  assert.plan(2)

  const original = {
    number: 10,
    string: 'foo',
    boolean: true
  }

  const cloned = clone(original)

  assert.notEqual(cloned, original)
  assert.same(cloned, original)
})

tap.test('complex', assert => {
  assert.plan(2)

  const date = new Date()

  const original = {
    objects: {
      array: [ null, undefined, date, /deepcopy/ig ],
      to: null,
      object: {
        number: NaN,
        string: 'A',
        boolean: true
      }
    }
  }

  const expected = {
    objects: {
      array: [ null, null, date.toISOString(), {} ],
      to: null,
      object: {
        number: null,
        string: 'A',
        boolean: true
      }
    }
  }

  const cloned = clone(original)

  assert.notEqual(cloned, original)
  assert.same(cloned, expected)
})
