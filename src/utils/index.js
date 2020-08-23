const DEFAULT_COLOR = '282828'
const DEFAULT_LENGTH = 200
const DEFAULT_TEXT = ''
// 十六进制颜色值的正则表达式
const colorReg = /^([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/

function getLength(params = {}) {
  if (!params.length) {
    return {
      width: DEFAULT_LENGTH,
      height: DEFAULT_LENGTH,
    }
  }
  let lengthString = params.length || `${DEFAULT_LENGTH}`
  const length = lengthString.split('x')
  const width = isNaN(parseInt(length[0])) ?
    DEFAULT_LENGTH :
    parseInt(length[0])
  const height = isNaN(parseInt(length[1])) ?
    DEFAULT_LENGTH :
    parseInt(length[1])
  return {
    width,
    height
  }
}

function getColor(params = {}) {
  const color = params.color || DEFAULT_COLOR
  if (!colorReg.test(color)) {
    return DEFAULT_COLOR
  }
  return color
}

function getText(params = {}) {
  const text = params.text || DEFAULT_TEXT
  return text
}

function getConfig(params = {}, origin) {
  const {
    width,
    height
  } = getLength(params)
  const color = getColor(params)
  const text = getText(params)
  return {
    width,
    height,
    color,
    text
  }
}
/**
 * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
 * sHex为传入的十六进制的色值
 * alpha为rgba的透明度
 */
function colorRgba(sHex, alpha = 1) {

  /* 16进制颜色转为RGB格式 */
  let sColor = sHex.toLowerCase()
  if (sColor && colorReg.test(sColor)) {
    if (sColor.length === 3) {
      var sColorNew = ''
      for (let i = 0; i < 3; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    //  处理六位的颜色值
    var sColorChange = []
    for (let i = 0; i < 6; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return `rgba(${sColorChange.join(',')},${alpha})`
  } else {
    return 'rgba(40,40,40,1)'
  }
}

module.exports = {
  getConfig,
  colorRgba
}