export const convertMiliSecToMinSec = (duration: number) => {
  const min = Math.floor(duration / 1000 / 60)
  const sec = Math.floor((duration / 1000) % 60)
  return sec > 9 ? `${min}:${sec}` : `${min}:0${sec}`
}
