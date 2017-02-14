/* eslint-env mocha */

const assert = require('assert')

describe('math', function () {
  describe('add', function () {
    it('should get 1 + 1 correct', function () {
      assert.equal(2, 1 + 1)
    })
  })
  describe('add', function () {
    it('should get 2 - 1 correct', function () {
      assert.equal(1, 2 - 1)
    })
  })
  describe('multiply', function () {
    it('should get 2 * 2 correct', function () {
      assert.equal(4, 2 * 2)
    })
  })
  describe('divide', function () {
    it('should get 4 / 2 correct', function () {
      assert.equal(2, 4 / 2)
    })
  })
})
