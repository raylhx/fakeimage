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
  console.log('--------home')
  ctx.body = 'home'
})

router.get('/:length', async (ctx) => {
  const config = getConfig(ctx.params)
  const image = new FakeImg(config)
  const imageBase64 = image.toDraw()
  ctx.type = 'image/png'
  ctx.status = 200
  ctx.body = imageBase64
})

router.get('/:length/:color', async (ctx) => {
  console.log('~~~~', ctx.params)
  const config = getConfig(ctx.params)
  const image = new FakeImg(config)
  const imageBase64 = image.toDraw()
  // console.log(ctx.params)
  // console.log(image.toDraw())

  ctx.type = 'image/png'
  ctx.status = 200
  ctx.body = imageBase64
})
// router.get('/:length/:color/:text', async (ctx) =>{
//   const {width, height}= getLength(ctx.params)
//   const color = getColor(ctx.params)
//   const text = getText(ctx.params)

//   ctx.body = 'len'
// })



app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)
console.log(`listen ${PORT}--------------`)