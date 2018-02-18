// input: moment object
// output: 1991-11-29

export const taskDateFormat = dateObj =>
  dateObj.format ? dateObj.format('YYYY-MM-DD') : dateObj;