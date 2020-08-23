const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const PORT = 3099 // TODO
const {
  getConfig
} = require('./src/utils/index')

const FakeImg = require('./src/utils/fakeImg')


const router = new Router()
router.get('/', async (ctx) => {
  ctx.body = 'home'
})

router.get('/:length', async (ctx) => {
  const config = getConfig(ctx.params, 'length')
  const image = new FakeImg(config)
  const imageBase64 = image.toDraw()
  ctx.type = 'image/png'
  ctx.status = 200
  ctx.body = imageBase64
})

router.get('/:length/:color', async (ctx) => {
  const config = getConfig(ctx.params, 'color')
  const image = new FakeImg(config)
  const imageBase64 = image.toDraw()

  ctx.type = 'image/png'
  ctx.status = 200
  ctx.body = imageBase64
})
router.get('/:length/:color/:text', async (ctx) => {
  const config = getConfig(ctx.params, 'text')
  const image = new FakeImg(config)
  const imageBase64 = image.toDraw()


  ctx.type = 'image/png'
  ctx.status = 200
  ctx.body = imageBase64
})



app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)
console.log(`listen ${PORT}--------------`)