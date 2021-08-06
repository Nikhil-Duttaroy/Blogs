---
title: "Functions in JavaScript  : Part ☝"
date: "6/08/2021"
description: 'Functions in JS'
---

### What is a Function?
Functions are a set of instructions that are grouped together to achieve a specific result. Intructions to a computer are nothing but code.
** So we can say that a function is a set of code(instruction) given to the computer. **
Now there are two basic concepts in functions, function declaration and function invocation/function call.
To get a better understanding of function declaration and function call let us use a real-world scenario like *draw* and *drawing* in terms of functions draw is function declaration and drawing is a function call. Now, what does this mean for computers? This simply means that draw specifies what to do and drawing specifies when to do it.

<img src="https://i.ibb.co/720QScC/Function-syntax.png" alt="Function-syntax" border="0">

Syntax Explanation:
- *function* is a keyword for declaring a function in javascript
- *functionName* is the name that you would give your function
- *parameters*  are the variable that u can pass to your function while declaring it.
- *arguments* are the values passed to the function when they are called.

Example

<img src="https://i.ibb.co/mtkvYvM/Function-Example.png" alt="Function-Example" border="0">

Example Explanation:
- *addTwoNumbers* is the function name given while declaring it
- *parameters* passed are num1 and num2 
- when calling the function by typing *addTwoNumbers(5 , 6) *  the number 5 is passed as an argument to the function where it belongs to num1 and the same for 6 and num2.


### Three Ways for Defining a Function in Javascript
- Function Declaration
A function declaration is creating a function. It is not immediately called, rather it is kept in the storage until it is required to be performed. This is the method that we have seen above.

- Function Expression
Creating a function by assigning it to a variable is called as a function expression.

- Arrow Function 
Introduced in ECMAScript2015 it is similar to the normal way of declaring a function with slight changes in the syntax.

<img src="https://i.ibb.co/wK6Gw0R/Defining-a-Function-in-Javascript.png" alt="Defining-a-Function-in-Javascript" border="0">


### Now we know what functions are but why should we use it?
This is a two-part ans one is so that we don't have to write similar code again and again
and also to follow the simple principle of divide and conquer i.e to divide bigger problems into smaller chunks.

Eg:
Your Have to write name and rollnumber of every student in a class.
<img src="https://i.ibb.co/C7ndYfP/Function-Use-Case.png" alt="Function-Use-Case" border="0">

Tip: Use Arrow Functions and make your and the ones who read your code life easier.

**There's a lot more to functions for that keep waiting for part two.**



