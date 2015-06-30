/**
 * Modules
 */
import gm from 'gm'
import thunkify from 'thunkify'

/**
 * Resize image
 */
function manip(buf, {width=null, height=null}, cb) {
  gm(buf)
    .resize(width, height, opts)
    .toBuffer(cb)
}

/**
 * Exports
 */
export default thunkify(manip)