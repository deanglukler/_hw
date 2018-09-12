func main() {
  a := 43

  var b = &a
  // the above code makes b a pointer to the memory address where an int is stored
  // b is of type "int pointer"
  // *int -- the * is part of the type -- b is of type *int

  fmt.Println(b)  // 0x20818a220
  fmt.Println(*b) // 43

  // b is an int pointer;
  // b points to the memory address where an int is stored
  // to see the value in that memory address, add a * in front of b
  // this is known as dereferencing
  // the * is an operator in this case

  *b = 42        // b says, "The value at this address, change it to 42"
  fmt.Println(a) // 42

  // this is useful
  // we can pass a memory address instead of a bunch of values (we can pass a reference)
  // and then we can still change the value of whatever is stored at that memory address
  // this makes our programs more performant
  // we don't have to pass around large amounts of data
  // we only have to pass around addresses

  // everything is PASS BY VALUE in go, btw
  // when we pass a memory address, we are passing a value
}





// ------------------




func zero(z *int) {
  fmt.Println(z)
  *z = 0
}

func main() {
  x := 5
  fmt.Println(&x)
  zero(&x)
  fmt.Println(x) // x is 0
}




















