/**
 * Modules
 */

import koa from 'koa'
import route from 'koa-route'
import handle from './handle'

/**
 * Constants
 */

const app = koa()

/**
 * Routes
 */

app.use(
  route.get('/',
    function * () {
      const {url, width=null, height=null} = this.query
      const {type, body} = yield handle(url, width, height)

      this.set({'Content-Type': type})
      this.body = body
    }
  )
)

/**
 * Exports
 */

export default app
