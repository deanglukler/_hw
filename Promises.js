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


// *  *  *  *


// Promise.all
// will take an array of promises return a resolved promise once all have successfully executed

Promise.all([PromisNum1, PromisTwo])
  .then(arrData => 'an array of all the returns') // only if all Promises call resolve
  .catch(err => 'the errorr (or maybe an array of errors) that got rejected')

// and with destructuring..
const [user, account] = await Promise.all([
  fetch('/user'),
  fetch('/account')
])



// Promise.race
// rturn the first resolved promise
Promise.race()










// *   *   *   *
// about composition
new Promise( () => {
  // this get request happens as soon as the Promise is created
  httpGet('http://api.icndb.com/jokes/random/10')
  // this promise is never resolved or rejected
})



//  *  *  *
twoSecs.then() //... notice your not calling the promise
twoSecs().then() //... this is NOT how to use a promise



// *  *  *  *  *
// here's an example of returning a promise.. then we'd actually call the iPromise function
var iPromise = function(keepPromiseBoolean) {
  console.log('hmmmm let me think')
  return new Promise(function(resolve, reject) {
    if (keepPromiseBoolean) {
      setTimeout(_ => resolve('okay true', 400))
    } else {
      setTimeout(_ => reject('nope, reject', 400))
    }
  })
}

iPromise(true).then(result => {
  console.log(result) // prints okay true
}, err => {
  console.log(err) // error cb with then doesn't run
})




// *  *  *  *
// catches can be used as a backup
const passOrFail = bool => {
  return new Promise((res, rej) => {
    if (bool) {
      res('You did it')
    } else {
      rej('naaaaahhh')
    }
  })
}

passOrFail(false)
  .catch(err => passOrFail(true)) // returns a promise that is resolved
  .then(res => console.log(res)) // outputs the resolved

// where this is different..
passOrFail(false)
  .then(res => console.log(res)) // doesn't get called
  .catch(err => console.log(err))




// EXAMPLE num 9
// if the input is falser the promise will reject
var deansProm = (input) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (!input) {
                reject('Your input was falsey giiirlll \n')
            } else {
                resolve('Your input was ' + input + '\n')
            }
        }, 500)
    })
}

// testing ...

deansProm()
    .then((resolveValue) => { // doesn't run
        console.log(resolveValue)
    })
    .then((thenInput) => { // doesn't run
        console.log('will I see this?')
    })
    .catch((error) => {
        console.log('No success', error)
    })
// No success Your input was falsey giiirlll


deansProm()
    .catch((error) => {
        console.log('No success', error)
        return error   // this will return a resolved promise
    })
    .then((resolveValue) => { // doesn't run
        console.log(resolveValue)
    })
    .then((thenInput) => { // doesn't run
        console.log('will I see this?')
    })
// No success Your input was falsey giiirlll
// Your input was falsey giiirlll
// will I see this?


deansProm()
    .catch((error) => {
        console.log('No success', error)
        return new Error('another new error')
        // this DOES NOT return a rejected promise,
        // it's still resolved
    })
    .catch((error) => { // this doesn't get run
        console.log('No success again', error)
        return error
    })
    .then((resolveValue) => { // doesn't run
        console.log(resolveValue)
    })
    .then((thenInput) => { // doesn't run
        console.log('will I see this?')
    })
//    No success Your input was falsey giiirlll

//    Error: another new error
//        at deansProm.catch (<anonymous>:4:16)
//    will I see this?


deansProm('something')
    .then((resolveValue) => { // doesn't run
        console.log(resolveValue)
    })
    .then((thenInput) => { // doesn't run
        console.log('will I see this?')
    })
    .catch((error) => {
        console.log('No success', error)
    })
// Your input was something
// will I see this?



deansProm('wubalubadubdub')
    .then((resolveValue) => {
        console.log('Success!! ', resolveValue)
    })
    .catch((error) => {
        console.log('No success', error)
    })
// Success!!  Your input was wubalubadubdub



// or with async await..
async function deansAsync(input) {
    let output
    try {
        output = 'cool yoy did is with async!! ' + await deansProm(input)
    } catch(err) {
        output = 'you got a problem ' + err
    }
    console.log(output)
}
//ex..
deansAsync('please work')

















