//activity1 for loop

//task1

// let number =1
// for (let number = 1; number <=10; number++) {
//     const element = number;
//     console.log(element);
    
// }



// task2 JavaScript program to print the multiplication table of 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

//activity 2 while loop

//task3
// let sum = 0;
// let i = 1;

// while (i <= 10) {
//     sum += i;
//     i++;
// }

// console.log(`The sum of numbers from 1 to 10 is ${sum}`);

//task4


// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }


//activity 3 do while loop


// let i=1
// do {

//     console.log(i);
//     i++
    
// } while (i<=5);

//task6

// let number = 6; // You can change this value to calculate the factorial of any number
// let factorial = 1;
// let i = 1;

// do {
//     factorial *= i;
//     i++;
// } while (i <= number);

// console.log(`The factorial of ${number} is ${factorial}`);


//task print triangle
// let rows = 10; // You can change this value to print a triangle with more or fewer rows

// for (let i = 1; i <= rows; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }


//activity  loop control

// for (let index = 1; index < 10; index++) {

//     if (index==5) {
//         // console.log(`detected 5`);
//         continue                    // does not print the specific condition
//     }
//         console.log(`value of i is ${index}`);
        
//     }


    
for (let index = 1; index < 20; index++) {

if (index==5) {
    console.log(`detected 5`);
    break                       // does not print after break and control flow will stop iterations
}
    console.log(`value of i is ${index}`);
    
}







