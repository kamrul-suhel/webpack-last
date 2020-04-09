import express from 'express'
import path from 'path'

import webpack from 'webpack'
import config from '../../config/webpack.dev'

const compiler = webpack(config)
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const devMiddleware = webpackDevMiddleware(compiler, config.devServer)
const hotMiddleware = webpackHotMiddleware(compiler)

const server = new express()

/**
 * Dev middleware
 */
server.use(devMiddleware)

/**
 * Hot middleware
 */
server.use(hotMiddleware)

/**
 * Static middleware
 */
const staticMiddleware = express.static('build')
server.use(staticMiddleware)


server.listen(3000, () => {
    console.log('server llistning')
})