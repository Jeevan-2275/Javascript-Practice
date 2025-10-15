// today we will learn about recursion,promise,function in C++ programming language.

// #include <iostream>
// using namespace std;

// void printNumbers(int n) {
//     if (n > 5)  
//         return;
    
//     cout << n << " ";  
//     printNumbers(n + 1);  
// }

// int main() {
//     printNumbers(1);
//     return 0;
// }

#include <iostream>
using namespace std;

int recursiveSum(int n) {
    if (n == 1) 
        return 1;
    else
        return n + recursiveSum(n - 1);  
}

int main() {
    int n = 5;
    int sum = recursiveSum(n);
    cout << "Sum from 1 to " << n << " is: " << sum << endl;
    return 0;
}



// #include <iostream>
// using namespace std;

// int factorial(int n) {
//     if (n == 0 || n == 1)  // Base case
//         return 1;
//     else
//         return n * factorial(n - 1);  // Recursive step
// }

// int main() {
//     int n = 5;
//     int result = factorial(n);
//     cout << "Factorial of " << n << " is: " << result << endl;
//     return 0;
// }
