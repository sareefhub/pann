import Router from 'koa-router'
import announcement from './announcement'

const apiRouter = new Router()

apiRouter.get('/api/greet', (ctx,next) => {
    ctx.body = {msg: 'Hello world'}
})

apiRouter.use('/api/announcement',announcement.routes())

export default apiRouter