/**
 * Modules
 */

import gm from 'gm'
import thunkify from 'thunkify'

/**
 * Manipulate image
 */

function manip (buf, {width = null, height = null}, cb) {
  gm(buf)
    .resize(width, height)
    .toBuffer(cb)
}

/**
 * Exports
 */

export default thunkify(manip)
