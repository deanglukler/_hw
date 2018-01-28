// ex
// input: "2018-01-23 01:49:20.426117"
// ouptput: 1516700960426

const toUnix = date => parseInt(moment(date).format('x'), 10);
