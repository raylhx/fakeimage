const koa = require('koa')
const Router = require('koa-router')

const app = new koa()
const PORT = 3099 // TODO
const {
  getConfig
} = require('./src/utils/index')

const { FakeImg } = require('./src/utils/index')



const router = new Router()
router.get('/', async (ctx) => {
  console.log('--------home')
  ctx.body = 'tttt'
})

router.get('/:length', async (ctx) =>{
  const config = getConfig(ctx.params)
  const image = new FakeImg(config)


  ctx.type = 'image/png'
  ctx.status = 200
  ctx.body = image
})

// router.get('/:length/:color', async (ctx) =>{
//   const {width, height}= getLength(ctx.params)
//   const color = getColor(ctx.params)
//   ctx.body = 'len'
// })
// router.get('/:length/:color/:text', async (ctx) =>{
//   const {width, height}= getLength(ctx.params)
//   const color = getColor(ctx.params)
//   const text = getText(ctx.params)

//   ctx.body = 'len'
// })



app.use(router.routes()).use(router.allowedMethods())

app.listen(PORT)
console.log(`listen ${PORT}--------------`)


