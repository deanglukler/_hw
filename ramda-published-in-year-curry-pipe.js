const R = require('ramda')

// write a function which takes an array of books and returns them filtered by year

const publishedThatYear = (book, year) => book.year === year

const publishedInYear = (year, books) => {
  const pipeline = R.pipe(
    R.filter(R.curry(R.flip(publishedThatYear))(year)),
    R.map(book => book.name)
  )
  return pipeline(books)
}

const result = publishedInYear(1856, [
  { name: 'My first sword', year: 1856 },
  { name: 'My second sword', year: 2017 },
  { name: 'Ghost Busters', year: 1856 },
])

console.log(result)