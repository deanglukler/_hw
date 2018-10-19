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