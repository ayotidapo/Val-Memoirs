export function randomArray(length, max) {
  return [...new Array(length)].map(() => Math.round(Math.random() * max))
}
export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}
export function lighten(col, amt) {
  amt = Math.abs(amt) / 100
  return colorLuminance(col, amt)
}
export function darken(col, amt) {
  amt = Math.abs(amt)
  amt = amt / 100 * -1
  return colorLuminance(col, amt)
}
export function hexToRgbA(hex, opacity) {
  let c
  const o = opacity || 1
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0x${c.join('')}`
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',')},${o})`
  }
  return ''
}
export function colorLuminance(hex, lum) {
  hex = String(hex).replace(/[^0-9a-f]/gi, '')
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
  }
  lum = lum || 0
  let rgb = '#',
    c,
    i
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16)
    rgb += `00${c}`.substr(c.length)
  }
  return rgb
}

export function encodeHtml(el) {
  return el.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
export function shuffle(a) {
  for (let i = a.length; i; i--) {
    const j = Math.floor(Math.random() * i)
    ;[a[i - 1], a[j]] = [a[j], a[i - 1]]
  }
}
export function encodeHtmlEntity(str) {
  const buf = []
  for (let i = str.length - 1; i >= 0; i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
  }
  return buf.join('')
}

export function randomColor(colors) {
  const colorKeys = Object.keys(colors)
  const min = 0
  const max = colorKeys.length
  const index = Math.floor(Math.random() * (max - min)) + min
  return colorKeys[index]
}
