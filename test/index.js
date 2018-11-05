const clone = require('..')
const tap = require('tap')

tap.test('simple', assert => {
  assert.plan(2)

  let original = {
    number: 10,
    string: 'foo',
    boolean: true
  }

  let cloned = clone(original)

  assert.notEqual(cloned, original)
  assert.same(cloned, original)
})

tap.test('complex', assert => {
  assert.plan(2)

  let date = new Date()

  let original = {
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

  let expected = {
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

  let cloned = clone(original)

  assert.notEqual(cloned, original)
  assert.same(cloned, expected)
})
