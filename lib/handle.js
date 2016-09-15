/**
 * Modules
 */

import identify from './identify'
import download from 'download'
import manip from './manip'
import mime from 'mime'

/**
 * Handler
 */

function * handle (url, width, height) {
  const buf = yield download(normalizeUrl(url))
  const fmt = yield identify(buf)

  return {
    type: mime.lookup(fmt),
    body: yield manip(buf, {width, height})
  }
}

/**
 * Helpers
 */

function normalizeUrl (url) {
  if (/^https?\:\/\//.test(url)) return url
  if (/^\/\//.test(url)) return 'https:' + url

  return 'https://' + url
}

/**
 * Exports
 */

export default handle
