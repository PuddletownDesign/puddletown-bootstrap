/**
 * A very simple unit test example
 */

'use strict'
/* global describe, it */

var expect = require('chai').expect
const obj = require('../src/js/calc.js')

describe('add', () => {
  var fn = obj.add

  it('should add two numbers correctly', () => {
    expect(fn(3, 4)).to.equal(7)
  })
})
