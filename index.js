/**
 * Modules
 */
import koa from 'koa'
import mount from 'koa-mount'
import logger from 'koa-logger'
import {port} from './lib/config'
import main from './lib/main'

/**
 * Vars
 */
const app = koa()

/**
 * Main
 */
app.use(logger())
app.use(mount(main))

/**
 * Listen
 */
app.listen(port)
console.log('listening on port', port)