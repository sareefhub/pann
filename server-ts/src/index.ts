import Koa from 'koa'
import json from 'koa-json'
import apiRouter from './api'
import loadFixtures from './fixtures'
import appConfig from './config'

const app = new Koa()

app.use(json())
app.use(apiRouter.routes())

app.listen(8000)

loadFixtures(appConfig.ClearDataBeforeLoad)