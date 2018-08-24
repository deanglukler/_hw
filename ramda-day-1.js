// Complement

const isEven = x => x % 2 === 0
const isOdd = complement(isEven)

find(isOdd, [1, 2, 3, 4]) // --> 1





// Both / Either

const isCitizen = either(wasBornInCountry, wasNaturalized)
const isEligibleToVote = both(isOver18, isCitizen)





// Pipelines
// The new function takes the same number of arguments as the first function it is given
// Note that all of the functions after the first must only take a single argument

const operate = pipe(
  multiply,
  addOne,
  square
)




// Compose
// This is exactly the same as pipe above, but with the functions in the opposite order.

const operate = compose(
  square,
  addOne,
  multiply
)





