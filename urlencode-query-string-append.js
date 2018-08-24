(() => {
  const options = new URLSearchParams()
  options.append('color', '#fff')
  options.append('auto_play', 'true')
  options.append('download', 'false')
  options.append('buying', 'false')
  return `${this.state.iframeURL}?${options.toString()}`
})()