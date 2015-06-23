/**
 * Modules
 */
import assert from 'assert'
import manip from '../lib/manip'
import fs from 'fs'
import gm from 'gm'
import thunkify from 'thunkify'

/**
 * Tests
 */
describe('images', function() {
  it('should work', function *() {
    const buf = fs.readFileSync('test/fixtures/logo11w.png')
    const res = yield manip(buf, {width: 200})
    const {width} = yield dims(res)
    assert.equal(width, 200)
  })
})

/**
 * Helpers
 */
 const dims = thunkify(function(buf, cb) {
  gm(buf).size(cb)
 })