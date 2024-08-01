// class definition
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// // Create an instance of the Person class
// const personInstance = new Person("Nikhil", 25);

// // Log the greeting message
// console.log(personInstance.greeting());

//task 2

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age is: ${this.age}`);
    }
}

// Create an instance of the Person class
const personInstance = new Person("Alice", 30);

// Log the greeting message
console.log(personInstance.greeting());

// Update the age and log the updated age
personInstance.updateAge(31);

