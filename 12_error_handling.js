//basic error handling with try catch

//task

// function throwErrorFunction() {
//     // This function will intentionally throw an error
//     throw new Error("This is an intentional error");
//   }
  
//   function handleError() {
//     try {
//       // Call the function that throws an error
//       throwErrorFunction();
//     } catch (error) {
//       // Handle the error and log an appropriate message to the console
//       console.error("An error occurred: ", error.message);
//     }
//   }
  
//   // Call the function that handles the error
//   handleError();


//task2

// function divideNumbers(numerator, denominator) {
//     // Check if the denominator is zero and throw an error if true
//     if (denominator === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     // Return the result of the division
//     return numerator / denominator;
//   }
  
//   function handleDivision(numerator, denominator) {
//     try {
//       // Attempt to divide the numbers
//       const result = divideNumbers(numerator, denominator);
//       // Log the result if no error is thrown
//       console.log(`The result of dividing ${numerator} by ${denominator} is ${result}`);
//     } catch (error) {
//       // Handle the error and log an appropriate message to the console
//       console.error("An error occurred: ", error.message);
//     }
//   }
  
//   // Test the function with a valid denominator
//   handleDivision(10, 2);
  
//   // Test the function with a denominator of zero to trigger the error
//   handleDivision(10, 0);
  

//finally block 


// function exampleFunction() {
//     try {
//       // Log message in the try block
//       console.log("Entering try block");
      
//       // Intentionally throw an error to observe the catch block
//       throw new Error("An intentional error occurred");
      
//       // This line will not be executed because of the error
//       console.log("This line will not be executed");
//     } catch (error) {
//       // Log message in the catch block
//       console.error("Entering catch block: ", error.message);
//     } finally {
//       // Log message in the finally block
//       console.log("Entering finally block");
//     }
//   }
  
//   // Call the example function to observe the execution flow
//   exampleFunction();


// custom error object

// Define the custom error class
// class CustomError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "CustomError";
//     }
//   }
  
//   function throwErrorFunction() {
//     // Throw an instance of the custom error
//     throw new CustomError("This is a custom error");
//   }
  
//   function handleError() {
//     try {
//       // Call the function that throws the custom error
//       throwErrorFunction();
//     } catch (error) {
//       // Check if the error is an instance of the custom error
//       if (error instanceof CustomError) {
//         console.error("Caught a custom error: ", error.message);
//       } else {
//         console.error("Caught an unexpected error: ", error.message);
//       }
//     } finally {
//       // Log a message to indicate the finally block is executed
//       console.log("Entering finally block");
//     }
//   }
  
//   // Call the function that handles the error
//   handleError();
  
  // task


  // Define the custom error class
// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }
  
//   // Function to validate user input
//   function validateUserInput(input) {
//     if (typeof input !== 'string' || input.trim() === '') {
//       throw new ValidationError("Invalid input: Input must be a non-empty string");
//     }
//     // Additional validation checks can be added here
//     return true;
//   }
  
//   function handleInput(input) {
//     try {
//       // Validate the user input
//       validateUserInput(input);
//       console.log("Input is valid");
//     } catch (error) {
//       // Check if the error is an instance of ValidationError
//       if (error instanceof ValidationError) {
//         console.error("Caught a validation error: ", error.message);
//       } else {
//         console.error("Caught an unexpected error: ", error.message);
//       }
//     } finally {
//       // Log a message to indicate the finally block is executed
//       console.log("Validation attempt completed");
//     }
//   }
  
//   // Test the function with valid input
//   handleInput("Valid input");
  
//   // Test the function with invalid input
//   handleInput("");



// activity error handling in the promises

// function createRandomPromise() {
//     return new Promise((resolve, reject) => {
//       const isSuccess = Math.random() > 0.5;
//       setTimeout(() => {
//         if (isSuccess) {
//           resolve("The operation was successful");
//         } else {
//           reject(new Error("The operation failed"));
//         }
//       }, 1000);
//     });
//   }
  
//   createRandomPromise()
//     .then((message) => {
//       console.log(message);
//     })
//     .catch((error) => {
//       console.error("Caught a promise rejection: ", error.message);
//     });
  

// task

// function createRandomPromise() {
//     return new Promise((resolve, reject) => {
//       const isSuccess = Math.random() > 0.5;
//       setTimeout(() => {
//         if (isSuccess) {
//           resolve("The operation was successful");
//         } else {
//           reject(new Error("The operation failed"));
//         }
//       }, 1000);
//     });
//   }
  
//   async function handlePromise() {
//     try {
//       const message = await createRandomPromise();
//       console.log(message);
//     } catch (error) {
//       console.error("Caught an error: ", error.message);
//     }
//   }
  
  // Call the async function to observe the behavior
//   handlePromise();

// graceful error handling in fetch

// task

// fetch('https://invalid.url.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data received:', data);
//   })
//   .catch(error => {
//     console.error('Fetch error:', error.message);
//   });


//task

async function fetchData() {
    try {
      const response = await fetch('https://invalid.url.com/data');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data received:', data);
    } catch (error) {
      console.error('Fetch error:', error.message);
    }
  }
  
  // Call the async function to observe the behavior
  fetchData();
  
  
  