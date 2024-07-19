//activity array creation and access

//task
// const myarr=[1,2,3,4,5]
// console.log(myarr);

// task

// const myarr=[1,2,3,4,5]
// console.log(myarr[0]);
// console.log(myarr[4]);

// Define the array
// let array = [1, 2, 3, 4, 5];

// // Access the first element
// let firstElement = array[0];

// // Access the last element
// let lastElement = array[array.length - 1];

// // Log them to the console
// console.log("First element:", firstElement);
// console.log("Last element:", lastElement);

//activity array methods

//task
// let myarr=[1,2,3]
// let newarr=myarr.push(4)
// console.log(myarr);

// let myarr=[1,2,3]
// myarr.pop()
// console.log(myarr);

// let myarr=[1,2,3]
// myarr.shift()
// console.log(myarr);

// let myarr=[1,2,3]
// myarr.unshift(0)
// console.log(myarr);


//activity 3 advance methods of array

// let myarr=[1,2,3]
// let newarr=myarr.map( (num)=>{
//     return num*2
// })
// console.log(newarr);

// let myarr=[1,2,3,4,5,6]
// let newarr=myarr.filter((num)=>num%2===0)
// console.log(newarr);


//task
// let myarr=[1,2,3,4,5,6]
// currVal=0
// let total=myarr.reduce((acc, currVal)=>{
//     return acc +currVal
// },0)
// console.log(total);

// activity array iteration
// let myarr=[1,2,3,4,5,6]
// for (let i = 0; i < myarr.length; i++) {
//     const element = myarr[i];
//     console.log(element);
// }


// let myarr=[1,2,3,4,5,6]
// myarr.forEach((nums)=>{
//     console.log(nums);
// })


//activity multidimensonal array

// // Define a two-dimensional array
// let twoDimensionalArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// // Log the entire array to the console
// console.log(twoDimensionalArray);

// Define a two-dimensional array
let twoDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Access a specific element
let specificElement = twoDimensionalArray[1][2]; // This will access the element at row 1, column 2 (0-based indexing)

// Log the specific element to the console
console.log(specificElement);




