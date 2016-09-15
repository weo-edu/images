/**
 * Modules
 */

import handle from '../lib/handle'
import manip from '../lib/manip'
import thunkify from 'thunkify'
import assert from 'assert'
import fs from 'fs'
import gm from 'gm'

/**
 * Tests
 */

describe('images', function() {
  it('should work', function * () {
    const buf = fs.readFileSync('test/fixtures/logo11w.png')
    const res = yield manip(buf, {width: 200})
    const {width} = yield dims(res)
    assert.equal(width, 200)
  })

  it('should handle urls', function * () {
    try {
      const {type, body} = yield handle('https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', 40)

      assert.equal(type, 'image/png')
      assert.equal(body.length, 1084)

      yield handle('//www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', 40)
      yield handle('www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png', 40)
    } catch (e) {
      assert.fail(e, null, 'Exception thrown on url variation')
    }
  })
})

/**
 * Helpers
 */

const dims = thunkify(function(buf, cb) {
  gm(buf).size(cb)
})
