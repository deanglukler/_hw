// in: "2018-01-23 01:49:20.426117"
// out: "16 hours ago"

var sinceTime = date => moment.utc(date).from(moment())

// ------
// in: same
// out: "Monday, January 22nd 2018, 6:50:19 pm"

var sinceTime = date => moment.utc(date).format("dddd, MMMM Do YYYY, h:mm:ss a")

// ------
// in: same
// out: ... localized.. i dunno i'm busy..

export const simpleDate = date =>
  moment
    .utc(date)
    .local()
    .format('dddd, MMMM Do');