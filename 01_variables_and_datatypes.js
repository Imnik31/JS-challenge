
//activity1  variable declaration
// task1
var a= 12345
console.log(a);

//task2
let name="Nikhil"
console.log(name);


//activity2 constant declaration
//task3
const b=true
console.log(b);
console.log(typeof(b));

// activity3  data types

let c=123
console.log(c);
console.log(typeof(c));

let d="nik"
console.log(d);
console.log(typeof(d));

let E=false
console.log(E);
console.log(typeof(E));


let big=122445n
console.log(big);
console.log(typeof(big));

let account
console.log(account);
console.log(typeof(account));

let mycars={
    1:"bugati",
    2:"rangerover"

}

console.log(mycars);
console.log(typeof(mycars));

let students=["a","b","c"]
console.log(students);
console.log(typeof(students));

const fruits = ["Apple", "Banana", "Cherry"];
console.log(typeof(fruits));


//activity4  reassigning the variables

//task5

let age =23
console.log(age);
age=25
console.log(age);

// activity 5 understanding of const

//task6 reassign using const

const animal="cow"
console.log(animal);
// animal="goat"
console.log(animal);  // error using assignment to constant variable


//feature request
// String
let Name = "John Doe";
console.log(`Value: ${Name}, Type: ${typeof Name}`);

// Number
let Age = 30;
console.log(`Value: ${Age}, Type: ${typeof Age}`);

// Boolean
let isStudent = false;
console.log(`Value: ${isStudent}, Type: ${typeof isStudent}`);

// Null
let emptyValue = null;
console.log(`Value: ${emptyValue}, Type: ${typeof emptyValue}`); // Note: typeof null returns "object"

// Undefined
let notAssigned;
console.log(`Value: ${notAssigned}, Type: ${typeof notAssigned}`);

// Object
let person = {
    firstName: "John",
    lastName: "Doe"
};
console.log(`Value: ${JSON.stringify(person)}, Type: ${typeof person}`);

// Array
let Fruits = ["Apple", "Banana", "Cherry"];
console.log(`Value: ${Fruits}, Type: ${typeof Fruits}`); // Note: typeof array returns "object"

// Function
let greet = function() {
    return "Hello!";
};
console.log(`Value: ${greet}, Type: ${typeof greet}`);

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(`Value: ${bigNumber}, Type: ${typeof bigNumber}`);

// Symbol
let uniqueId = Symbol("id");
console.log(`Value: ${uniqueId.toString()}, Type: ${typeof uniqueId}`);


//demonstrate the diffrence between let and const
// Using let for variable declaration and reassignment
let variableLet = "Initial value";
console.log(`Initial value (let): ${variableLet}`); // Output: Initial value (let): Initial value

// Reassigning the let variable
variableLet = "Reassigned value";
console.log(`Reassigned value (let): ${variableLet}`); // Output: Reassigned value (let): Reassigned value

// Using const for variable declaration
const variableConst = "Initial value";
console.log(`Initial value (const): ${variableConst}`); // Output: Initial value (const): Initial value

// Attempting to reassign the const variable
try {
    variableConst = "Reassigned value"; // This will throw an error
} catch (error) {
    console.error(`Error on reassignment (const): ${error.message}`); // Output: Assignment to constant variable.
}



