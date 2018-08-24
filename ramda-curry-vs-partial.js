const R = require('ramda')

const sayToPeople = (something, ppl1, ppl2) =>
  `hey ${ppl1} and ${ppl2}, I wanted to say ${something}`


// const sayToDeanKarl = R.partialRight(sayToPeople, ['Dean', 'Karl'])
const sayToPeopleCurry = R.curry(sayToPeople)
const sayToDeanKarl = sayToPeopleCurry(R.__, 'Dean', 'Karl')

const result = sayToDeanKarl('you guys are fucking thugs')

console.log(result)
