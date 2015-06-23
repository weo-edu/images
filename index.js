/**
 * Modules
 */
import {port} from './lib/config'
import koa from 'koa'
import mount from 'koa-mount'
import main from './lib/main'

/**
 * Vars
 */
const app = koa()

/**
 * Main
 */
app.use(mount(main))

/**
 * Listen
 */
app.listen(port)
console.log('listening on port', port)