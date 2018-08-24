The URLSearchParams interface defines utility methods to work with the query string of a URL.

An object implementing URLSearchParams can directly be used in a for...of structure, instead of entries(): for (var p of mySearchParams) is equivalent to for (var p of mySearchParams.entries()).
Constructor

URLSearchParams()
    Constructor returning a URLSearchParams object.

Methods

This interface doesn't inherit any methods.

URLSearchParams.append()
    Appends a specified key/value pair as a new search parameter.
URLSearchParams.delete()
    Deletes the given search parameter, and its associated value, from the list of all search parameters.
URLSearchParams.entries()
    Returns an iterator allowing to go through all key/value pairs contained in this object.
URLSearchParams.get()
    Returns the first value associated to the given search parameter.
URLSearchParams.getAll()
    Returns all the values associated with a given search parameter.
URLSearchParams.has()
    Returns a Boolean indicating if such a search parameter exists.
URLSearchParams.keys()
    Returns an iterator allowing to go through all keys of the key/value pairs contained in this object.
URLSearchParams.set()
    Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
URLSearchParams.sort()
    Sorts all key/value pairs, if any, by their keys.
URLSearchParams.toString()
    Returns a string containing a query string suitable for use in a URL.
URLSearchParams.values()
    Returns an iterator allowing to go through all values of the key/value pairs contained in this object.

Example

var paramsString = "q=URLUtils.searchParams&topic=api";
var searchParams = new URLSearchParams(paramsString);

//Iterate the search parameters.
for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === null; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"