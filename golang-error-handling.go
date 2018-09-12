if err != nil {
  fmt.Println("err happened", err)
  // Println formats using the default formats for its operands and writes to standard output.

  log.Println("err happened", err)
  // pretty much the same (maybe it adds a date)
  // Println formats using the default formats for its operands and writes to standard output.

  log.Fatalln(err)
  // Fatalln is equivalent to Println() followed by a call to os.Exit(1).
  // note: the output of log can be changed in func init()

  panic(err)
  // this termination sequence can be controlled by the built in function recover
}