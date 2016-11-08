var clone = require('..')
var tap = require('tap')

tap.test('stringify-clone', tap => {
  tap.plan(2)

  tap.test('simple', assert => {
    assert.plan(2)

    var original = {
      number: 10,
      string: 'foo',
      boolean: true
    }

    var cloned = clone(original)

    assert.notEqual(cloned, original)
    assert.same(cloned, original)
  })

  tap.test('complex', assert => {
    assert.plan(2)

    var date = new Date()

    var original = {
      objects: {
        array: [
          null, undefined, date, /deepcopy/ig
        ],
        object: {
          number: NaN,
          string: 'A',
          boolean: true
        },
        to: null
      }
    }

    var expected = {
      objects: {
        array: [
          null, null, date.toISOString(), {}
        ],
        object: {
          number: null,
          string: 'A',
          boolean: true
        },
        to: null
      }
    }

    var cloned = clone(original)

    assert.notEqual(cloned, original)
    assert.same(cloned, expected)
  })
})
