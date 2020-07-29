const DEFAULT_COLOR = '#282828'
const DEFAULT_LENGTH = 200
const DEFAULT_TEXT = ''

function getLength(params = {}) {
  if (!params.length) {
    return {
      width: DEFAULT_LENGTH,
      height: DEFAULT_LENGTH,
    }
  }
  let lengthString = params.length || `${DEFAULT_LENGTH}`
  const length = lengthString.split('x')
  const width = isNaN(parseInt(length[0]))
    ? DEFAULT_LENGTH
    : parseInt(length[0])
  const height = isNaN(parseInt(length[1]))
    ? DEFAULT_LENGTH
    : parseInt(length[1])
  return { width, height }
}

function getColor(params = {}) {
  const color = params.color || DEFAULT_COLOR
  const colorReg = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g
  if(!colorReg.test(color)) {
    return DEFAULT_COLOR
  }
  return color
}

function getText(params = {}) {
  const text = params.text || DEFAULT_TEXT
  return text
}

function getConfig(params = {}) {
  const {width, height}= getLength(params)
  const color = getColor(params)
  const text = getText(params)
  return {
    width,
    height,
    color,
    text
  }
}

module.exports = {
  getConfig,
}