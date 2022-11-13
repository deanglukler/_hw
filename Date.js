//Methods

// these are not prototype methods!!  Just use them how they lay here
// ex.. Date.now() // --> 21235413457
Date.now()
    // Returns the numeric value corresponding to the current time -
    // the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC,
     // with leap seconds ignored.

Date.parse()
    // Parses a string representation of a date and returns the number of milliseconds
    // since 1 January, 1970, 00:00:00, UTC, with leap seconds ignored.

    // Note: Parsing of strings with Date.parse is strongly discouraged due to browser
    // differences and inconsistencies.

Date.UTC()
    // Accepts the same parameters as the longest form of the
    // constructor (i.e. 2 to 7) and returns the number of milliseconds since
    // January 1, 1970, 00:00:00 UTC, with leap seconds ignored.


// get the number of milliseconds from date
date.getTime()




// UTC unix date stuff

// ISO date format
new Date("2013-03-01T01:10:00")


d.toISOString()     "2013-01-09T16:00:00.000Z"


// GETTERS
.getDate()  1..31
.getDay()   0..6 (sun..sat)
.getFullYear()  2014
.getMonth()     0..11
.getHours()      
.getMinutes()    
.getSeconds()    
.getMilliseconds()   
.getTime()  ms since epoch
.getTimezoneOffset()     

UTC versions are also available (eg, .getUTCDate(), .getUTCDay(), etc).



// SETTERS
.setDate (val)   
.setDay (val)    
.setFullYear (val)   
.setMonth (val)      
.setHours (val)      
.setMinutes (val)    
.setSeconds (val)    
.setMilliseconds (val)   
.setTime (val)   
.setTimezoneOffset (val)     

See the getters list.








//CONVERT
d.toString()    "Mon Dec 29 2014 00:58:28 GMT+0800 (PHT)"
d.toTimeString()    "00:58:46 GMT+0800 (PHT)"
d.toUTCString()     "Sun, 28 Dec 2014 16:58:59 GMT"
d.toDateString()    "Thu Jan 10 2013"
d.toISOString()     "2013-01-09T16:00:00.000Z"
d.toLocaleString()  "12/29/2014, 12:57:31 AM"
d.toLocaleTimeString()  "12:57:31 AM"
d.getTime()     1419785527580








// compare date
// Compare < and > just as usual, but anything involving = should use a + prefix. Like so:

var x = new Date('2013-05-23');
var y = new Date('2013-05-23');

// less than, greater than is fine:
x < y; => false
x > y; => false
x === y; => false, oops!

// anything involving '=' should use the '+' prefix
// it will then compare the dates' millisecond values
+x <= +y;  => true
+x >= +y;  => true
+x === +y; => true







// create series of dates
// https://stackoverflow.com/a/50398144



























