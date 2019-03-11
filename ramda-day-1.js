// forEach
// Replace this:
for (const value of myArray) {
  console.log(value)
}
 
// with:
forEach(value => console.log(value), myArray)


// map
const double = x => x * 2
 
map(double, [1, 2, 3])


// filter
const isEven = x => x % 2 === 0

filter(isEven, [1, 2, 3, 4])  // --> [2, 4]


// reject
reject(isEven, [1, 2, 3, 4]) // --> [1, 3]


// find
find(isEven, [1, 2, 3, 4]) // --> 2

// reduce
const add = (accum, value) => accum + value
 
reduce(add, 5, [1, 2, 3, 4]) // --> 15











// Pipelines

const multiply = (a, b) => a * b
const addOne = x => x + 1
const square = x => x * x
 
// more imperative
const operate = (x, y) => {
  const product = multiply(x, y)
  const incremented = addOne(product)
  const squared = square(incremented)
 
  return squared
}
 
operate(3, 4) // => ((3 * 4) + 1)^2 => (12 + 1)^2 => 13^2 => 169

// functional!
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


// !@#$%^&*() ~hi
// IS PUBLISHED IN YEAR FUNCTION...
// write a function that returns all the books written in a given year

const books = [
  {
    title: 'book look',
    year: 1991
  },
  {
    title: 'book coook',
    year: 1991
  },
  {
    title: 'book took',
    year: 1989
  },
  {
    title: 'book glook',
    year: 1990
  }
];



// remember arguments are data last
// ie book last
const isPublishedInYear = R.curry((year, book) => book.year === year);

const booksInYear = R.curry((year, books) =>
  R.pipe(
    // because isPublishedInYear is curried it returns a function for filter
    R.filter(isPublishedInYear(year)),
    R.map(book => book.title)
  )(books)
);

// test it
console.log(booksInYear(1991, books));


// ~!@#$%^&*()_+
// SOME DECLARATIVE ALTERNATIVES

// arithmatic
1 + 3
R.add(1, 3)

3 - 1
R.subtract(3, 1)

3 * 4
R.multiply(3, 4)

7 / 3
R.divide(7, 3)

let num = 3
num++ // this is mutation!! oh noo!!
R.inc(num)

num--
R.dec(num)


// comparison

6 === 7
R.equals(6, 7)

5 >= 3
R.gte(5, 3)

5 <= 7
R.lte(5, 7)

7 > 2
R.gt(7, 2)

6 < 2
R.lt(6, 2)

const hi = hi2 = {}
hi === hi2
R.identical(hi, hi2)

const str = ''
str === ''
R.isEmpty(str)

// or with array..
const arr = []
R.isEmpty(arr)

let undeferss
R.isNil(undeferss)


// Logic

// with logic and, or, not
1 > 1 && 2 < 10
R.and(R.gt(1, 1), R.lt(2, 10))

1 > 1 || 2 < 10
R.or(R.gt(1, 1), R.lt(2, 10))

!null
R.not(null)

// http://randycoulman.com/blog/2016/05/31/thinking-in-ramda-combining-functions/
// with functions both, either, complement
2 > 1 && 2 < 10
R.both(R.gt(R.__, 1), R.lt(R.__, 10))(2)

2 > 1 || 2 < 10
R.either(R.gt(R.__, 1), R.lt(R.__, 10))(2)

const isEven = x => x % 2 === 0
!isEven(3)
R.complement(isEven)(3)

// default values
// defaultTo checks if the second argument isNil
// so zero will pass
undefined || 80
defaultTo(80, undefined)


// if else
true
R.T()

false
R.F()

() => 21
R.always(21)

const forever21 = age => R.ifElse(R.gte(R.__, 21), R.always(21), R.inc)(age)

input => input
R.indentity

let alwaysDrivingAge = age => R.ifElse(R.lt(R.__, 16), R.always(16), R.indentity)(age)
// or point free..
alwaysDrivingAge = R.ifElse(R.lt(R.__, 16), R.always(16), R.indentity)

// R.when
// when identity is the else option..
alwaysDrivingAge = age => R.when(R.lt(R.__, 16), R.always(16))(age)

// R.unless
// when identity is the first option in ifElse..
alwaysDrivingAge = age => R.unless(R.gte(R.__, 16), R.always(16))(age)
// or point free..
alwaysDrivingAge = R.unless(R.gte(R.__, 16), R.always(16))

// conditional 
// If none of the predicates matches, fn returns undefined

const water = temperature => cond([
  [equals(0),   always('water freezes at 0°C')],
  [equals(100), always('water boils at 100°C')],
  [T,           temp => `nothing special happens at ${temp}°C`]
])(temperature)















// objects
const obj = {
  prop1: 'prop1',
  prop2: 'prop2',
  prop3: 'prop3',
  nested: {
    prop4: 'prop4',
    prop5: 'prop5',
  }
}

// prop
obj.prop1
R.prop('prop1', obj)
// will raise an error! if lookup on undefined

// pick
{
  prop1: 'prop1',
  prop2: 'prop2',
}
R.pick(['prop1', 'prop2'])

// has
obj.hasOwnProperty('prop1')
R.has('prop1', obj)

// hasIn
obj.prop1 === undefined
R.hasIn('prop1', obj)

// path
// will return undefined (no error) even if first prop is undefined
obj.nested.prop4
R.path(['nested', 'prop4'], obj)

// propOr
obj.unknownHehe || 'default'
R.propOr('default', 'unknownHehe', obj)

// pathOr
// see above

// keys
Object.keys(obj)
R.keys(obj)

// values
Object.values(obj)
R.values(obj)

// updating (remember emmutability)
// assoc
obj.prop9 = 'newprop'
const obj2 = R.assoc('prop9', 'newprop', obj)

// assocPath
const obj3 = R.assocPath(['nested', 'prop9'], 'newprop', obj)

// dissoc
delete obj.prop9
const obj4 = R.dissoc('prop9', obj2)

// dissocPath
const obj5 = R.dissocPath(['nested', 'prop9'], obj3)

// omit -- delete several props at once
const obj6 = R.omit(['prop1', 'prop2'], obj)

// ex
const nextAge = compose(inc, prop('age'))
const celebrateBirthday = person => assoc('age', nextAge(person), person)

// evolve
// evolve takes an object that specifies a transformation function 
// for each property to be transformed
// Note that evolve will not add new properties

const celebrateBirthday = evolve({ age: inc })

// THIS IS DEPRICATED!!
// USE INSTEAD: mergeLeft, mergeRight 
// merge (two objects see mergeAll for multiple objects)
// merge returns a new object containing all of the properties and values from both objects. 
// If both objects have the same property, the value from the second argument is used

// the merge is shallow (USE deepMergeLeft instead)
// If the objects being merged both have a property whose value is a sub-object, 
// those sub-objects will not be merged

// Depricated but...
function f(a, b, options = {}) {
  const defaultOptions = { value: 42, local: true }
  const finalOptions = merge(defaultOptions, options)
}


// mergeAll
// takes an array of the objects to be merged












// Arrays

const numbers = [10, 20, 30, 40, 50, 60]
 
nth(3, numbers) // => 40  (0-based indexing)
 
nth(-2, numbers) // => 50 (negative numbers start from the right)
 
slice(2, 5, numbers) // => [30, 40, 50] (see below)
 
contains(20, numbers) // => true


head(numbers) // => 10
tail(numbers) // => [20, 30, 40, 50, 60] -- all but first
 
last(numbers) // => 60
init(numbers) // => [10, 20, 30, 40, 50] -- all but last
 
take(3, numbers) // => [10, 20, 30]
takeLast(3, numbers) // => [40, 50, 60]


// updating arrays

insert(3, 35, numbers) // => [10, 20, 30, 35, 40, 50, 60]
 
append(70, numbers) // => [10, 20, 30, 40, 50, 60, 70]
 
prepend(0, numbers) // => [0, 10, 20, 30, 40, 50, 60]
 
update(1, 15, numbers) // => [10, 15, 30, 40, 50, 60]


concat(numbers, [70, 80, 90]) // => [10, 20, 30, 40, 50, 60, 70, 80, 90]


remove(2, 3, numbers) // => [10, 20, 60]
 
without([30, 40, 50], numbers) // => [10, 20, 60] -- NOTE this takess an array
 
drop(3, numbers) // => [40, 50, 60]
 
dropLast(3, numbers) // => [10, 20, 30]


// ex, multiply the second index by 10..
update(2, multiply(10, nth(2, numbers)), numbers) // => [10, 20, 300, 40, 50, 60]

// this is cleaner approach
adjust(multiply(10), 2, numbers)














// lenses

const person = {
  name: 'Randy',
  socialMedia: {
    github: 'randycoulman',
    twitter: '@randycoulman'
  }
}
 
// lens takes a getter function and a setter function and returns the new lens
// NOTE usually you don't use lens, instead lensProp
const nameLens = lens(prop('name'), assoc('name'))

const twitterLens = lens(
  path(['socialMedia', 'twitter']),
  assocPath(['socialMedia', 'twitter'])
)



// lensProp creates a lens that focuses on a property of an object.

// lensPath creates a lens that focuses on a nested property of an object.

// lensIndex creates a lens that focuses on an element of an array.
const nameLens = lensProp('name')

const twitterLens = lensPath(['socialMedia', 'twitter'])



// usings lens
// view reads the value of the lens.

// set updates the value of the lens.

// over applies a transformation function to the lens.
view(nameLens, person) // => 'Randy'
 
set(twitterLens, '@randy', person)
// => {
//   name: 'Randy',
//   socialMedia: {
//     github: 'randycoulman',
//     twitter: '@randy'
//   }
// }
 
over(nameLens, toUpper, person)
// => {
//   name: 'RANDY',
//   socialMedia: {
//     github: 'randycoulman',
//     twitter: '@randycoulman'
//   }
// }









































