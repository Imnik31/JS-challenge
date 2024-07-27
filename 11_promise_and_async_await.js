// // understanding promise

// const promiseOne = new Promise(function(resolve, reject){        // create new promise 
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()                                        // to connect .then to promise
//     }, 3000)
// })


// // Create a promise that rejects with an error message after 2 seconds
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('Something went wrong!'));
//     }, 2000);
// });

// // Handle the promise rejection using .catch
// promise
//     .catch(error => {
//         console.error(`Promise rejected: ${error.message}`);
//     });


    // chaining promises

    // Function to simulate fetching data from a server
// const fetchData = (message, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// };

// // Simulate fetching data with chained promises
// fetchData('Fetching user data...', 1000)
//     .then((message) => {
//         console.log(message);
//         return fetchData('Fetching posts...', 1000);
//     })
//     .then((message) => {
//         console.log(message);
//         return fetchData('Fetching comments...', 1000);
//     })
//     .then((message) => {
//         console.log(message);
//         console.log('All data fetched successfully!');
//     })
//     .catch((error) => {
//         console.error(`Error: ${error.message}`);
//     });

//using async await
// Function to simulate a promise that resolves with a value after a delay
// const fetchData = (message, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// };
// // Async function that waits for the promise to resolve and logs the resolved value
// const logResolvedValue = async () => {
//     try {
//         const result = await fetchData('Data fetched successfully!', 2000);
//         console.log(result);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//     }
// };

// // Call the async function
// logResolvedValue();

// Function to simulate a promise that rejects with an error message after a delay
// const fetchDataWithError = (message, delay) => {
//     return new Promise((_, reject) => {
//         setTimeout(() => {
//             reject(new Error(message));
//         }, delay);
//     });
// };

// // Async function that handles the rejected promise using try...catch
// const handleRejectedPromise = async () => {
//     try {
//         const result = await fetchDataWithError('Something went wrong!', 2000);
//         console.log(result);
//     } catch (error) {
//         console.error(`Error: ${error.message}`);
//     }
// };

// // Call the async function
// handleRejectedPromise();



//task fetching data from API

// Function to fetch data from a public API and log the response data
// const fetchDataFromApi = () => {
//     // URL of the public API
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//     // Use the Fetch API to get data
//     fetch(apiUrl)
//         .then(response => {
//             // Check if the response is successful
//             if (!response.ok) {
//                 throw new Error('Network response was not ok ' + response.statusText);
//             }
//             // Parse the JSON data from the response
//             return response.json();
//         })
//         .then(data => {
//             // Log the response data to the console
//             console.log(data);
//         })
//         .catch(error => {
//             // Handle any errors that occurred during the fetch
//             console.error('There was a problem with the fetch operation:', error);
//         });
// };

// // Call the function to fetch data from the public API
// fetchDataFromApi();

//task

// Async function to fetch data from a public API and log the response data
// const fetchDataFromApi = async () => {
//     // URL of the public API
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//     try {
//         // Use the Fetch API to get data
//         const response = await fetch(apiUrl);

//         // Check if the response is successful
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }

//         // Parse the JSON data from the response
//         const data = await response.json();

//         // Log the response data to the console
//         console.log(data);
//     } catch (error) {
//         // Handle any errors that occurred during the fetch
//         console.error('There was a problem with the fetch operation:', error);
//     }
// };

// // Call the async function to fetch data from the public API
// fetchDataFromApi();

//activity concurrent promises

// Function to simulate fetching data with a delay
// const fetchData = (message, delay) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     });
// };

// // Create multiple promises
// const promise1 = fetchData('Data from API 1', 1000);
// const promise2 = fetchData('Data from API 2', 2000);
// const promise3 = fetchData('Data from API 3', 1500);

// // Use Promise.all to wait for all promises to resolve
// Promise.all([promise1, promise2, promise3])
//     .then((values) => {
//         // Log all the resolved values
//         console.log(values); // ['Data from API 1', 'Data from API 2', 'Data from API 3']
//     })
//     .catch((error) => {
//         // Handle any errors that occur
//         console.error('Error:', error);
//     });

// task promise.race

// Function to simulate fetching data with a delay
const fetchData = (message, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
};

// Create multiple promises
const promise1 = fetchData('Data from API 1', 1000);
const promise2 = fetchData('Data from API 2', 2000);
const promise3 = fetchData('Data from API 3', 1500);

// Use Promise.race to log the value of the first promise that resolves
Promise.race([promise1, promise2, promise3])
    .then((value) => {
        // Log the value of the first resolved promise
        console.log(value); // Logs the value of the first resolved promise
    })
    .catch((error) => {
        // Handle any errors that occur
        console.error('Error:', error);
    });



