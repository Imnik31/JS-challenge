// person.js
const person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    haveBirthday() {
        this.age += 1;
        console.log(`Happy birthday! I am now ${this.age} years old.`);
    }
};

module.exports = person;
