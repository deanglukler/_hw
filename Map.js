var one = [0 , 'one']
var two = [1, {prop: 'omg im an object'}]
var three = [2, ['apple', 'orange', 'banana']]
var deansMap = new Map([one, two, three])

console.log(deansMap.size) // 3

// other methods

Map.prototype.clear()
//    Removes all key/value pairs from the Map object.
Map.prototype.delete(key)
    // Returns true if an element in the Map object existed and has been removed, or false if the element does not exist. Map.prototype.has(key) will return false afterwards.
Map.prototype.entries()
    // Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
Map.prototype.get(key)
    // Returns the value associated to the key, or undefined if there is none.
Map.prototype.has(key)
    // Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
Map.prototype.keys()
    // Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
Map.prototype.set(key, value)
    // Sets the value for the key in the Map object. Returns the Map object.
Map.prototype.values()

Map.prototype.forEach((value, key) => {} [, thisArg])
    // Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
// or

for( let [key, value] of mapppyMap.entries() )