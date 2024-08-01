//task

 // closure



    // function makeFunc() {                    // in the closure whole memory will be shared(lexical scope) not only functional context
    //     const name = "Mozilla";
    //     function displayName() {
    //         console.log(name);
    //     }
    //     return displayName;
    // }

    // const myFunc = makeFunc();
    // myFunc();


    // function createCounter() {
    //     let counter = 0;
    
    //     return {
    //         increment: function() {
    //             counter++;
    //         },
    //         getValue: function() {
    //             return counter;
    //         }
    //     };
    // }
    
    // // Create an instance of the counter
    // const myCounter = createCounter();
    
    // // Increment the counter
    // myCounter.increment();
    // myCounter.increment();
    
    // // Get the current value of the counter
    // console.log(myCounter.getValue()); // Output: 2
    
    // // Increment the counter again
    // myCounter.increment();
    
    // // Get the updated value of the counter
    // console.log(myCounter.getValue()); // Output: 3
    

    // activity   practical closure 

    // task


    // function createIdGenerator() {
    //     let lastId = 0;
    
    //     return function() {
    //         lastId++;
    //         return lastId;
    //     };
    // }
    
    // // Create an instance of the ID generator
    // const generateUniqueId = createIdGenerator();
    
    // // Generate some unique IDs
    // console.log(generateUniqueId()); // Output: 1
    // console.log(generateUniqueId()); // Output: 2
    // console.log(generateUniqueId()); // Output: 3
    
    // // Generate more unique IDs
    // console.log(generateUniqueId()); // Output: 4
    // console.log(generateUniqueId()); // Output: 5

// task

// function createUserGreeter(userName) {
//     return function() {
//         return `Hello, ${userName}!`;
//     };
// }

// // Create a user greeter
// const greetAlice = createUserGreeter("Alice");
// const greetBob = createUserGreeter("Bob");

// // Greet the users
// console.log(greetAlice()); // Output: Hello, Alice!
// console.log(greetBob());   // Output: Hello, Bob!

// activity closoure in loops

// function createLoggingFunctions(count) {
//     const functions = [];

//     for (let i = 0; i < count; i++) {
//         functions.push((function(index) {
//             return function() {
//                 console.log(index);
//             };
//         })(i));
//     }

//     return functions;
// }

// // Create an array of logging functions
// const loggers = createLoggingFunctions(5);

// // Call each function in the array
// loggers.forEach(logger => logger());

// activity module pattern

// const createItemManager = () => {
//     let items = [];

//     return {
//         addItem: (item) => {
//             items.push(item);
//             console.log(`Added: ${item}`);
//         },
//         removeItem: (item) => {
//             const index = items.indexOf(item);
//             if (index > -1) {
//                 items.splice(index, 1);
//                 console.log(`Removed: ${item}`);
//             } else {
//                 console.log(`${item} not found.`);
//             }
//         },
//         listItems: () => {
//             console.log("Items:", items);
//             return items;
//         }
//     };
// };

// // Create an instance of the item manager
// const itemManager = createItemManager();

// // Add some items
// itemManager.addItem("Apple");
// itemManager.addItem("Banana");
// itemManager.addItem("Cherry");

// // List items
// itemManager.listItems(); // Output: Items: [ 'Apple', 'Banana', 'Cherry' ]

// // Remove an item
// itemManager.removeItem("Banana");

// // List items again
// itemManager.listItems(); // Output: Items: [ 'Apple', 'Cherry' ]

// // Attempt to remove an item that does not exist
// itemManager.removeItem("Grape"); // Output: Grape not found.


// activity memoization

// function memoize(fn) {
//     const cache = {};

//     return function(...args) {
//         const key = JSON.stringify(args);
//         if (cache[key] !== undefined) {
//             console.log(`Fetching from cache for arguments: ${args}`);
//             return cache[key];
//         } else {
//             console.log(`Computing result for arguments: ${args}`);
//             const result = fn(...args);
//             cache[key] = result;
//             return result;
//         }
//     };
// }

// // Example function to be memoized
// function add(a, b) {
//     return a + b;
// }

// // Create a memoized version of the add function
// const memoizedAdd = memoize(add);

// // Test the memoized function
// console.log(memoizedAdd(1, 2)); // Output: Computing result for arguments: 1,2 \n 3
// console.log(memoizedAdd(1, 2)); // Output: Fetching from cache for arguments: 1,2 \n 3
// console.log(memoizedAdd(2, 3)); // Output: Computing result for arguments: 2,3 \n 5
// console.log(memoizedAdd(2, 3)); // Output: Fetching from cache for arguments: 2,3 \n 5

//task

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = args[0]; // Since factorial function has only one argument
        if (cache[key] !== undefined) {
            console.log(`Fetching from cache for arguments: ${key}`);
            return cache[key];
        } else {
            console.log(`Computing result for arguments: ${key}`);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Test the memoized factorial function
console.log(memoizedFactorial(5)); // Output: Computing result for arguments: 5 \n 120
console.log(memoizedFactorial(5)); // Output: Fetching from cache for arguments: 5 \n 120
console.log(memoizedFactorial(6)); // Output: Computing result for arguments: 6 \n 720
console.log(memoizedFactorial(6)); // Output: Fetching from cache for arguments: 6 \n 720
console.log(memoizedFactorial(7)); // Output: Computing result for arguments: 7 \n 5040
console.log(memoizedFactorial(7)); // Output: Fetching from cache for arguments: 7 \n 5040






    