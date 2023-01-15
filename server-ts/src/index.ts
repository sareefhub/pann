import Koa from 'koa'
import json from 'koa-json'
import apiRouter from './api'
import loadFixtures from './fixtures'

const app = new Koa()

app.use(json())
app.use(apiRouter.routes())

app.listen(3306) 