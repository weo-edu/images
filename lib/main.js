/**
 * Modules
 */
import koa from 'koa'
import route from 'koa-route'
import download from 'download'
import manip from './manip'
import identify from './identify'
import mime from 'mime'

/**
 * Vars
 */
const app = koa()

/**
 * Routes
 */
app.use(
  route.get('/',
    function *() {
      const {url, width=null, height=null} = this.query
      const buf = yield download(url)
      const fmt = yield identify(buf)

      this.set({'Content-Type': mime.lookup(fmt)})
      this.body = yield manip(buf, {width, height})
    }
  )
)

/**
 * Exports
 */
export default app