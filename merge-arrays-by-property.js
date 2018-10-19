// see this..
// https://stackoverflow.com/a/20221897/9808057
function merge(a, b, prop){
    var reduced =  a.filter( aitem => ! b.find ( bitem => aitem[prop] === bitem[prop]) )
  return reduced.concat(b);
}