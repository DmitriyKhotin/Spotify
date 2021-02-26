import FastAverageColor from 'fast-average-color'

const fac = new FastAverageColor()

const getColor = async (url: string) => {
  const color = await fac.getColorAsync(url, {
    ignoredColor: [255, 255, 255, 255],
  })
  console.log(color)
  return color.hex
}

export default getColor
