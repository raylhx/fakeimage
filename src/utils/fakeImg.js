const { createCanvas } = require('canvas')
// 生成图片
class FakeImg {
  constructor(config) {
    this.width = config.width
    this.height = config.height
    this.color = config.color
    this.text = config.text
  }

  toDraw() {
    const canvas = createCanvas(this.width, this.height)
    const ctx = canvas.getContext('2d')
    if(this.text) {
      ctx.font = `${this.width / 4}Impact`
      ctx.fillText('Awesome!', this.width / 2, this.height / 2)
    }
    ctx.fillStyle(this.color)
    ctx.fillRect(0, 0, this.width, this.height)
    let buffer = canvas.toBuffer()
    // todataurl 还有一个不确定是否是这个
    return buffer
  }
}

module.exports = FakeImg