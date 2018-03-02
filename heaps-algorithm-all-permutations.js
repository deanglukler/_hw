function heaps(array) {

  function swap(index, otherIndex) {

    var atIndex = array[index]
    var atOtherIndex = array[otherIndex]
    array.splice(index, 1, atOtherIndex)
    array.splice(otherIndex, 1, atIndex)

  }

  function generate(n) {
    if (n === 1) {
      console.log(array)
    } else {
      for (var i = 0; i < n - 1; ++i) {
        generate(n - 1)
        if (n % 2 == 0) swap(i, n - 1)
        else swap(0, n - 1)
      }
      generate(n - 1)
    }
  }

  var n = array.length
  generate(n)
}

heaps(['a','b', 'c', 'd'])
