// Once a promise has changed stated from pending.. it cannot change states again
// this Promise will be reject because the 500ms timeout is shorter than the 1000
let myPromise = new Promise((resolve, reject) => {

  setTimeout(() => resolve('this data gets passed on'), 1000)

  setTimeout(() => reject('uh oh'), 500)

})

// basic usage..

myPromise
  .then(data => 'this is the resolved callback', err => 'this is the rejected callback')

// or

myPromise
  .then(data => 'do something cool')
  .catch(err => 'caatch me if you can')

// Promise.all
// will take an array of promises return a resolved promise once all have successfully executed

Promise.all([PromisNum1, PromisTwo])
  .then(arrData => 'an array of all the returns') // only if all Promises call resolve
  .catch(err => 'the errorr (or maybe an array of errors) that got rejected')

// Promise.race
// rturn the first resolved promise
Promise.race()
