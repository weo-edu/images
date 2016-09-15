/**
 * Modules
 */

import gm from 'gm'
import thunkify from 'thunkify'

/**
 * Identify an image's file format
 */

function identify (buf, cb) {
  gm(buf).identify('%m', cb)
}

/**
 * Exports
 */

export default thunkify(identify)
