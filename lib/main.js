/**
 * Modules
 */
import koa from 'koa'
import route from 'koa-route'

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
      this.body = yield manip(buf, {width: Number(width), height: Number(height)})
    }
  )
)

/**
 * Exports
 */
export default app