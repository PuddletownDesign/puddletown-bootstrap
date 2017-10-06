'use strict'

/* global describe, it, expect */

var expect = require('chai').expect
const obj = require('../src/js/cleanurl')

describe('string lowercaser', () => {
  var fn = obj.lowercase

  it('should lower case the string', () => {
    expect(fn('WTF')).to.equal('wtf')
  })
})

describe('replaceSpacesWithHyphens', () => {
  var fn = obj.replaceSpacesWithHyphens

  it('should replaces all spaces ith hyphens', () => {
    expect(fn('This is a string')).to.equal('This-is-a-string')
    expect(fn('This is a7 string LQ')).to.equal('This-is-a7-string-LQ')
  })
})

describe('replaceSpecialCharaters', () => {
  var fn = obj.replaceSpecialCharaters

  it('should replaces all spaces ith hyphens', () => {
    expect(fn('this>is@string')).to.equal('thisisstring')
  })

  it('should not strip all spaces', () => {
    expect(fn('this is a string')).to.not.equal('thisisastring')
  })

  it('complex string test', () => {
    expect(fn('^^t$h!i%$sIsA@Bi†¥¨ˆøgStri%&n[g')).to.equal('thisIsABigString')
  })
})

describe('make', () => {
  var fn = obj.make

  it('should replaces all spaces ith hyphens', () => {
    expect(fn('this is a string')).to.equal('this-is-a-string')
  })

  it('average url test', () => {
    expect(fn('Learning React 2 part 3: redux')).to.equal('learning-react-2-part-3-redux')
  })

  it('complex string text', () => {
    expect(fn('£th™is is•™ a@@@ s§¡tr∞inµg')).to.equal('this-is-a-string')
  })
})
