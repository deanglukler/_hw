return_type function_name( parameter list ) {
   body of the function
}

// By default, C++ uses call by value to pass arguments. 
// In general, this means that code within a 
// function cannot alter the arguments used to call the function 


// ex
// function returning the max between two numbers
int max(int num1, int num2) {
   // local variable declaration
   int result;
 
   if (num1 > num2)
      result = num1;
   else
      result = num2;
 
   return result; 
}





// function declarations

return_type function_name( parameter list );

// For the above defined function max(), following is the function declaration 
int max(int num1, int num2);

// Parameter names are not important in function declaration only their type is required, 
// so following is also valid declaration
int max(int, int);

// Function declaration is required when you define a function in one source file 
// and you call that function in another file. 
// In such case, you should declare the function at the top of the file calling the function.






#include <iostream>
using namespace std;
 
// function declaration
int max(int num1, int num2);
 
int main () {
   // local variable declaration:
   int a = 100;
   int b = 200;
   int ret;
 
   // calling a function to get max value.
   ret = max(a, b);
   cout << "Max value is : " << ret << endl;
 
   return 0;
}
 
// function returning the max between two numbers
int max(int num1, int num2) {
   // local variable declaration
   int result;
 
   if (num1 > num2)
      result = num1;
   else
      result = num2;
 
   return result; 
}









// default parameters
#include <iostream>
using namespace std;
 
int sum(int a, int b = 20) {
   int result;
   result = a + b;
  
   return (result);
}
int main () {
   // local variable declaration:
   int a = 100;
   int b = 200;
   int result;
 
   // calling a function to add the values.
   result = sum(a, b);
   cout << "Total value is :" << result << endl;

   // calling a function again as follows.
   result = sum(a);
   cout << "Total value is :" << result << endl;
 
   return 0;
}