import tc from 'tinycolor2'

const getCorrectIndex = (number: number) => {
  if (number > 255) {
    return 255
  }
  if (number < 0) {
    return 0
  }
  return number
}

export default (hash: string) => {
  const [r, g, b] = hash
    .substr(0, 3)
    .split('')
    .map((char) => getCorrectIndex(char.charCodeAt(0)))

  return {
    color: tc({ r, g, b }).lighten(10).saturate(10).toHexString(),
    colorLighten: tc({ r, g, b }).lighten(30).saturate(30).toHexString(),
  }
}
