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

//     static genericGreeting() {
//         return "Hello, this is a generic greeting message.";
//     }
// }

// class Student extends Person {
//     constructor(name, age, studentId) {
//         super(name, age);
//         this.studentId = studentId;
//     }

//     greeting() {
//         return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
//     }

//     getStudentId() {
//         return `Student ID is: ${this.studentId}`;
//     }
// }

// // Call the static method and log the message
// console.log(Person.genericGreeting());


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

    static genericGreeting() {
        return "Hello, this is a generic greeting message.";
    }
}

class Student extends Person {
    static studentCount = 0;

    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        Student.studentCount++;
    }

    greeting() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId() {
        return `Student ID is: ${this.studentId}`;
    }

    static getStudentCount() {
        return `Total number of students: ${Student.studentCount}`;
    }
}

// Create instances of the Student class
const student1 = new Student("Alice", 21, "S10001");
const student2 = new Student("Bob", 22, "S10002");

// Log the total number of students
console.log(Student.getStudentCount());
