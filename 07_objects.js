//activity object creation and access

//task

// const book={
//     tittle:"math",
//     author:"HC verma",
//     year:1998

// }
// console.log(book);

//task

// console.log(book.author);
// console.log(book.tittle);
// console.log(book.year);



//activity object methods
// const book = {
//     title: "math",
//     author: "HC Verma",
//     year: 1998,
    
//     getTitleAndAuthor: function() {
//         return `Title: ${this.title}, Author: ${this.author}`;
//     }
// };

// // Call the method and log the result
// const result = book.getTitleAndAuthor();
// console.log(result);


//task

// const book = {
//     title: "math",
//     author: "HC Verma",
//     year: 1998,

//     getTitleAndAuthor: function() {
//         return `Title: ${this.title}, Author: ${this.author}`;
//     },

//     updateYear: function(newYear) {
//         this.year = newYear;
//     }
// };

// // Call the method to get title and author
// const result = book.getTitleAndAuthor();
// console.log(result);

// // Update the year and log the updated object
// book.updateYear(2021);
// console.log(book);


// nested objects

// const library = {
//     name: "City Library",
//     books: [
//         {
//             title: "Math",
//             author: "HC Verma",
//             year: 1998
//         },
//         {
//             title: "1984",
//             author: "George Orwell",
//             year: 1949
//         },
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             year: 1960
//         }
//     ]
// };

// // Log the library object to the console
// console.log(library);

// console.log(library.name);
// // Access and log the titles of all books in the library
// library.books.forEach(book => {
//     console.log(book.title);
// });


//activity this keyword

// const library = {
//     name: "City Library",
//     books: [
//         {
//             title: "Math",
//             author: "HC Verma",
//             year: 1998,
//             getTitleAndYear: function() {
//                 return `Title: ${this.title}, Year: ${this.year}`;
//             }
//         },
//         {
//             title: "1984",
//             author: "George Orwell",
//             year: 1949,
//             getTitleAndYear: function() {
//                 return `Title: ${this.title}, Year: ${this.year}`;
//             }
//         },
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             year: 1960,
//             getTitleAndYear: function() {
//                 return `Title: ${this.title}, Year: ${this.year}`;
//             }
//         }
//     ]
// };

// // Call the method and log the result for each book
// library.books.forEach(book => {
//     console.log(book.getTitleAndYear());
// });



// activity  object iteration

// const library = {
//     name: "City Library",
//     books: [
//         {
//             title: "Math",
//             author: "HC Verma",
//             year: 1998,
//             getTitleAndYear: function() {
//                 return `Title: ${this.title}, Year: ${this.year}`;
//             }
//         },
//         {
//             title: "1984",
//             author: "George Orwell",
//             year: 1949,
//             getTitleAndYear: function() {
//                 return `Title: ${this.title}, Year: ${this.year}`;
//             }
//         },
//         {
//             title: "To Kill a Mockingbird",
//             author: "Harper Lee",
//             year: 1960,
//             getTitleAndYear: function() {
//                 return `Title: ${this.title}, Year: ${this.year}`;
//             }
//         }
//     ]
// };

// // Use a for...in loop to iterate over the properties of each book object
// library.books.forEach(book => {
//     for (const property in book) {
//         if (book.hasOwnProperty(property)) {
//             console.log(`${property}: ${book[property]}`);
//         }
//     }
//     console.log('---'); // Separator between books
// });


const library = {
    name: "City Library",
    books: [
        {
            title: "Math",
            author: "HC Verma",
            year: 1998,
            getTitleAndYear: function() {
                return `Title: ${this.title}, Year: ${this.year}`;
            }
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949,
            getTitleAndYear: function() {
                return `Title: ${this.title}, Year: ${this.year}`;
            }
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960,
            getTitleAndYear: function() {
                return `Title: ${this.title}, Year: ${this.year}`;
            }
        }
    ]
};

// Use Object.keys and Object.values to log all the keys and values of the book objects
library.books.forEach(book => {
    const keys = Object.keys(book);
    const values = Object.values(book);
    
    keys.forEach((key, index) => {
        console.log(`${key}: ${values[index]}`);
    });
    
    console.log('---'); // Separator between books
});





