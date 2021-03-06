'use strict'

const test = require('tape')
const Base = require('vigour-base')
const isPlainObj = require('../')
const isObj = require('brisky-is-obj')

const testCases = [
  [{}, true],
  [{ a: 'a' }, true],
  [new Base({}), false],
  [[], true],
  [['a'], true],
  [function () {}, false]
]

test('isPlainObj', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isPlainObj(item[0]), item[1], 'isPlainObj(' + JSON.stringify(item[0]) + ') === ' + item[1])
  })
})

test('isObj', function (t) {
  t.plan(testCases.length)
  testCases.forEach(function (item) {
    t.equals(isObj(item[0]), item[1], 'isObj(' + JSON.stringify(item[0]) + ') === ' + item[1])
  })
})

