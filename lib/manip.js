/**
 * Modules
 */
import gm from 'gm'
import thunkify from 'thunkify'

/**
 * Manipulate image
 */
function manip(buf, {width, height}, cb) {
  gm(buf)
    .resize(width, height)
    .toBuffer((err, outBuf) => {
      err ? cb(err) : cb(null, outBuf)
    })
}

/**
 * Exports
 */
export default thunkify(manip)