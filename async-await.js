console.log(await (new Promise((resolve) => {
  setTimeout(() => {
    resolve('hello from the resolve')
  }, 2000)
})))