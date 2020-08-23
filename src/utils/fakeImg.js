const {
  createCanvas
} = require('canvas')

const {
  colorRgba
} = require('./index')
// 生成图片
module.exports = class FakeImg {
  constructor(config) {
    this.width = config.width
    this.height = config.height
    this.color = config.color
    this.text = config.text
  }

  toDraw() {
    const canvas = createCanvas(this.width, this.height)
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = colorRgba(this.color)
    ctx.fillRect(0, 0, this.width, this.height)

    if (this.text) {
      ctx.font = `${this.width / 6}px Impact`
      ctx.fillStyle = '#ffffff'
      ctx.fillText(this.text, this.width * 0.1, this.height * 0.5)
    }

    let buffer = canvas.toBuffer()
    return buffer
  }
}