// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }

//     updateAge(newAge) {
//         this.age = newAge;
//         console.log(`Updated age is: ${this.age}`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     getStudentId() {
//         return `Student ID is: ${this.studentId}`;
//     }
// }

// // Create an instance of the Student class
// const studentInstance = new Student("Bob", 20, "S12345");

// // Log the student ID
// console.log(studentInstance.getStudentId());


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

class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId() {
        return `Student ID is: ${this.studentId}`;
    }
}

// Create an instance of the Student class
const studentInstance = new Student("Bob", 20, "S12345");

// Log the overridden greeting message
console.log(studentInstance.greeting());
