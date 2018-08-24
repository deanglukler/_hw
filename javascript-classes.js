// notes:
// classes are not hoisted like functions
// ---

class Person {
  constructor(name, yearBorn) {
    this.name = name
    this.yearBorn = yearBorn;
  }

  // getter function
  get age() {
    return this.calcAge()
  }

  calcAge() {
    return new Date().getFullYear() - this.yearBorn
  }

  what() {
    console.log(`${this.name} is a person`)
  }

  // static method
  // called without instantiating the class
  // cannot be called through a class instance
  static arms() {
    return 2
  }

  // static get method
  // Person.sayHello
  static get sayHello() {
    console.log('hellos')
  }
}

// extend a class.. (juggler is a person)
class Jugler extends Person {
  constructor(name, yearBorn) {
    // you will not be able to use the 'this' keyword until running super()
    // super calls the constructor of the parent class and allows you to overwrite 'this'
    super(name, yearBorn)

    this.juggler = true;
  }

  what() {
    console.log(`${this.name} is a juggler`)
  }
}

























