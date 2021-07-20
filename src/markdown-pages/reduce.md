---
title: "reduce() :  A Javascript Array Method (most troublesome too??) 😬"
date: "20/07/2021"
description: 'My first blog)'
---

<!-- # reduce() :  A Javascript Array Method (most troublesome too??) 😬 -->

##### What is the reduce method ?
The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value, It is the complex way of saying the reduce method executes  a function for each value of an array.
##### Let's  first get into the syntax
 	`array.reduce(reducer, initialValue)`
-  **reducer** - Function to run for each array element
`const reducer = (accumulator, currentValue) => {something with accumulator and currentValue};`
- **initialValue** - Starting value for the reducer (Optional)

<hr/>

**Combining The Two**

`array.reduce((accumulator, currentValue) => { ... }, initialValue);`
- **accumulator** : This is where the result of each iteration is stored (The Final Result)
- **currentValue** : This is the value that  is currently being used
- **initialValue** : This is an optional field that will default to the first element of the array if not provided

#### Example
##### Traditional Way
<img src="https://i.ibb.co/tsNxtXr/Traditional.png" alt="Traditional" border="0">

##### Using Reduce Method
<img src="https://i.ibb.co/s6NwqN2/Reduce-Method.png" alt="Reduce-Method" border="0">

**Let us now under stand what is happening here**

1st iteration :
-  accumulator = 0
-  currentValue=array[0]   i.e 1
-  initialValue = 0
			

------------
2nd iteration :
-  accumulator = 0+1 = 1
-  currentValue=array[1]   i.e 2
-  initialValue = 0

------------
3rd iteration :
-  accumulator = 0+1+2 = 3
-  currentValue=array[2]   i.e 3
-  initialValue = 0

------------
4th iteration :
-  accumulator = 0+1+2+3= 6
-  currentValue=array[2]   i.e 3
-  initialValue = 0

------------
5th iteration :
-  accumulator = 0+1+2+3+4= 10
-  currentValue=array[3]   i.e 4
-  initialValue = 0

------------
6th iteration :
-  accumulator = 0+1+2+3+4+5= 15
-  currentValue=array[4]   i.e 5
-  initialValue = 0
			
#### >>>>>> OUTPUT = Value Stored in Accumulator= 15

<hr/>