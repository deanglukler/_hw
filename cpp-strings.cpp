// C strings..
// Strings are just arrays of chars terminated by a NULL (0x00) byte,
// represented in strings as the special character '\0'.
// (We don't have to include the NULL byte in string literals; the compiler
//  inserts it at the end of the array for us.)
char a_string[20] = "This is a string";
printf("%s\n", a_string); // %s formats a string

printf("%d\n", a_string[16]); // => 0
// i.e., byte #17 is 0 (as are 18, 19, and 20)





//////////
// C++ Strings
//////////

// Strings in C++ are objects and have many member functions
#include <string>

using namespace std; // Strings are also in the namespace std (standard library)

string myString = "Hello";
string myOtherString = " World";

// + is used for concatenation.
cout << myString + myOtherString; // "Hello World"

cout << myString + " You"; // "Hello You"

// C++ strings are mutable.
myString.append(" Dog");
cout << myString; // "Hello Dog"

