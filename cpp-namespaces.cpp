namespace namespace_name 
{
   int x, y; // code declarations where 
             // x and y are declared in 
             // namespace_name's scope
}


Namespace declarations appear only at global scope.
Namespace declarations can be nested within another namespace.
Namespace declarations don’t have access specifiers. (Public or private)
No need to give semicolon after the closing brace of definition of namespace.
We can split the definition of namespace over several units.


#include <cstdio>

namespace Leap {
  void foo() {
    printf("yoooo");
  }
}

namespace leap {
  bool is_leap_year(int yr) {
    return true;
  }
}


// in leap.cpp
#include "leap.h"
using namespace Leap;
int main() {
  foo();
  Leap::foo();
  return 0;
}