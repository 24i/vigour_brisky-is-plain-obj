'use strict'

const isBuffer = require('is-buffer')
const isStream = require('is-stream')

/**
 * @id isPlain
 * @function isPlain
 * Checks whether an object is a plain object (excludes streams, buffers, vigour-base objects and null)
 * @param {object} obj - the object to check
 * @returns {boolean} plain - `true` if *obj* is a plain object, `false` otherwise
 */
module.exports = function isPlainObj (obj) {
  return (
    obj && typeof obj === 'object' &&
    !obj.isBase &&
    !isBuffer(obj) &&
    !isStream(obj)
  )
}
