// Sure underscore's way is more efficient, but the best way to check, when efficiency isn't an issue

function isFunction(functionToCheck) {
 return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}


// Underscore.js uses a more elaborate but highly performant test:

_.isFunction = function(obj) {
  return !!(obj && obj.constructor && obj.call && obj.apply);
};