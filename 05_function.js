//activity1 function declaration

//task1

// function evenOdd(num){
   
//     if(num%2===0){
//         console.log("number is even");
//     }
//     else{
//         console.log("number is odd");
//     }
// }

// evenOdd(3)

//task2

// function squere(num){
//     num=num**2
//     console.log(`squere of the number is , ${num}`);
// }

// squere(2)
// squere(23)


//activity 2 function expression

//task3

// const findMax = function(a, b) {
//     let max = (a > b) ? a : b;
//     console.log("The maximum of " + a + " and " + b + " is " + max);
//     return max;
//   };
  
//   // Example usage:
//   findMax(10, 20); // Output: The maximum of 10 and 20 is 20
//   findMax(5, 3);   // Output: The maximum of 5 and 3 is 5
//   findMax(-1, -5); // Output: The maximum of -1 and -5 is -1

  //task4

//   const concatenateStrings = function(str1, str2) {
//     let result = str1 + str2;
//     return result;
//   };
  
//   // Example usage:
//   let concatenated = concatenateStrings("Nikhil, ", "Katiyar");
//   console.log(concatenated); // Output: Hello, world!


//activity3 arrow function

// const sum=(num1, num2)=>{
//     let result=num1+num2
//     return result

// }

// sumtwonum=console.log(sum(2,3));

//task

// const containsCharacter = (str, char) => str.includes(char);

// // Example usage:
// console.log(containsCharacter("Nikhil", "n")); // Output: true
// console.log(containsCharacter("world", "a")); // Output: false
// console.log(containsCharacter("JavaScript", "J")); // Output: true

//activity function parameters and default value

// function multiply(a, b = 1) {
//     return a * b;
//   }
  
//   // Example usage:
//   console.log(multiply(5, 3)); // Output: 15
//   console.log(multiply(7));    // Output: 7 (since b defaults to 1)
//   console.log(multiply(4, 0)); // Output: 0
  

//task

// function greet(name, age){
//     console.log(`Hi ${name} and your age is:${age}`);
// }

// greet("nikhil", 23)

//activity higher order function

// function repeatFunction(fn, times) {
//     for (let i = 0; i < times; i++) {
//       fn();
//     }
//   }
  
//   // Example usage:
//   const sayHello = () => console.log("Hello!");
  
//   repeatFunction(sayHello, 3); // Output: "Hello!" will be printed 3 times
  

//task

function composeFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
  }
  
  // Example usage:
  const addFive = (num) => num + 5;
  const multiplyByTwo = (num) => num * 2;
  
  const result = composeFunctions(addFive, multiplyByTwo, 10);
  console.log(result); // Output: 30 (10 + 5 = 15, 15 * 2 = 30)
  





  
  