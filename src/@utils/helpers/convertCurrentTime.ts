export default (time: number) => {
  const mins = Math.floor(time / 60)
  const secs = Number((time % 60).toFixed())
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`
}
