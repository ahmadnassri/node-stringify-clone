/* global describe, it */

'use strict'

var clone = require('..')

require('should')

describe('Stringify Clone', function () {
  it('simple', function (done) {
    var original = {
      number: 10,
      string: 'foo',
      boolean: true
    }

    var cloned = clone(original)

    cloned.should.not.equal(original)
    cloned.should.eql(original)

    done()
  })

  it('complex', function (done) {
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

    cloned.should.not.equal(original)
    cloned.should.eql(expected)

    done()
  })
})
