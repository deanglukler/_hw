var obj = {
  myFn: function() {
    // this works too.. but..
    return 0
  }
}

obj = {
  myFn() {
    return 0
  },
  myNn1() {
    // just pop em in there right
    return 1
  }
}
