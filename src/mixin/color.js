import tinycolor from 'tinycolor2'

// function _convertRGBToCMYK (rgba) {
//   let {r, g, b} = rgba
//   r = _changeRange(r) // R'
//   g = _changeRange(g) // G'
//   b = _changeRange(b) // B'
//
//   let k = 1 - Math.max(r, b, b)   // K = 1-max(R', G', B')
//   let c = (1 - r - k) / (1 - k)   // C = (1-R'-K) / (1-K)
//   let m = (1 - g - k) / (1 - k)   // M = (1-G'-K) / (1-K)
//   let y = (1 - b - k) / (1 - k)   // Y = (1-B'-K) / (1-K)
//
//   return {c, m, y, k}
//
//   function _changeRange (colorValue) {
//     const MAX_COLOR_VALUE = 255
//     return colorValue / MAX_COLOR_VALUE // returns value between 0..1
//   }
// }

function _colorChange (data, oldHue) {
  if (!data) {
    return
  }
  if (data.a && data.a > 1) {
    data.a = 1
  }

  let color = data.hex ? tinycolor(data.hex) : tinycolor(data)
  let hsl = color.toHsl()
  let hsv = color.toHsv()
  let rgba = color.toRgb()

  // let cmyk = _convertRGBToCMYK(rgba)
  if (hsl.s === 0) {
    hsl.h = oldHue || 0
    hsv.h = oldHue || 0
  }
  return {
    hsl: hsl,
    hex: color.toHexString().toUpperCase(),
    rgba: rgba,
    hsv: hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source,
    a: data.a || 1
  }
}

export default {
  props: {
    colors: Object
  },
  created () {
    // console.log(this.colors)
    /*
      Enforce the colorChange in case only HEX value is given.
      Guarantees that HEX value is uppercase and other values such
      as HSL or HSV exists and reflect the HEX value
      TODO accept any kind of color value, HEX, RGBA, HSL and others
    */
    this.colors = _colorChange(this.colors)
  },
  methods: {
    colorChange (data, oldHue) {
      this.colors = _colorChange(data, oldHue)
    },
    isValidHex (hex) {
      return tinycolor(hex).isValid()
    },
    simpleCheckForValidColor (data) {
      let keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'a', 'v']
      let checked = 0
      let passed = 0

      for (let i = 0; i < keysToCheck.length; i++) {
        let letter = keysToCheck[i]
        if (data[letter]) {
          checked++
          if (!isNaN(data[letter])) {
            passed++
          }
        }
      }

      if (checked === passed) {
        return data
      }
    }
  }
}
