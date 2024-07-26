//activity template literals

//task

// let name= "nikhil katiyar"
// let age=25

// console.log(`my name is : ${name} and age is : ${age}`);

// //task

// let firstName='nikhil'
// let lastName="katiyar"
// console.log(`first name is ${firstName} and last name is ${lastName}`);

//activity destructuring


// // Example array of numbers
// const numbers = [10, 20, 30, 40, 50];

// // Using array destructuring to extract the first and second elements
// const [first, second] = numbers;

// // Logging the extracted elements to the console
// console.log(first);  // Output: 10
// console.log(second); // Output: 20

//task

// Example book object
// const book = {
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     genre: "Fiction"
//   };
  
//   // Using object destructuring to extract the title and author
//   const { title, author } = book;
  
//   // Logging the extracted properties to the console
//   console.log(title);  // Output: To Kill a Mockingbird
//   console.log(author); // Output: Harper Lee
  

//activity spread and rest operator

//task

// const myarr1=[1,2,3]
// const myarr2=[4,5,6]

// const newarr=[...myarr1, ... myarr2]
// console.log(newarr);

//task
// Function that accepts an arbitrary number of arguments and returns their sum
// function sum(...numbers) {
//     return numbers.reduce((acc, curr) => acc + curr, 0);
//   }
  
//   // Example usage
//   const result = sum(1, 2, 3, 4, 5);
//   console.log(result); // Output: 15


//activity default parameters

// function numproduct(num1, num2=1){
//     product=num1*num2
//     return product

// }

// // const pro=numproduct(3, 2)
// // console.log(pro);
// const pro=numproduct(3)
// console.log(pro);
  

//activity enhanced object literals

//task

// Using enhanced object literals to create an object
// const title = "To Kill a Mockingbird";
// const author = "Harper Lee";
// const year = 1960;

// const book = {
//   // Property value shorthand
//   title,
//   author,
//   year,
  
//   // Method definition shorthand
//   getSummary() {
//     return `${this.title} by ${this.author}, published in ${this.year}.`;
//   },

//   // Computed property names
//   ['book_' + year]: true
// };

// // Logging the object to the console
// console.log(book);

// // Logging the result of the method to the console
// console.log(book.getSummary());

//task

// Variables to be used for computed property names
const propName1 = "name";
const propName2 = "age";
const propName3 = "location";

// Creating an object with computed property names
const person = {
  [propName1]: "Alice",
  [propName2]: 30,
  [propName3]: "New York"
};

// Logging the object to the console
console.log(person);


