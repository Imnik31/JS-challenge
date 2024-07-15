//activity1

//task1


let number=23

if (number>0) {
    console.log("number is positive");
    
}
 else if(number<0){
      console.log("number is negative");
} 
else{
    console.log("number is zero");
}


//task2

let age=8
if (age>=18) {
    console.log("you re eligble for vote");
} else {
    console.log("you are not elegible");
    
}


//activity2

//task3
let weekday=10
switch (weekday) {
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
          console.log("invalid day");
        break;
}

//activity 4 terneray operator

let num=1
let result=(num%2===0)? console.log("number is even"):console.log("number is odd");

//task5

// Function to check if a year is a leap year
function checkLeapYear(year) {
    // Check if the year is a leap year using the given conditions
    const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    // Log the result to the console
    console.log(`The year ${year} is ${isLeapYear ? '' : 'not '}a leap year.`);
}

// Example usage
checkLeapYear(2020); // The year 2020 is a leap year.
checkLeapYear(1900); // The year 1900 is not a leap year.
checkLeapYear(2000); // The year 2000 is a leap year.
checkLeapYear(2021); // The year 2021 is not a leap year.

