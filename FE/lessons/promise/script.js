// const promise = new Promise((resolve, reject) => {
//     let operation = false;
//     if (operation) {
//         resolve("Операция прошла успешно");
//     } else {
//         reject("Произошла ошибка");
//     }
// });

// then (result-state: fulfilled, catch (result: ...))

// promise
//     .then((successMessage) => {
//         console.log(successMessage);
//     })
//     .catch((errorMessage) => {
//         console.log(errorMessage);
//     });



// calback hell

// const promise2 = new Promise((resolve, reject) => {
//     if (Math.random() < 0.5) {
//         resolve("Success")
//     } else {
//         reject("Error")
//     }
// });

// promise2
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Работает finally");
//     })


// function valuePromise(argument) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof argument === "number") {
//                 resolve(argument)
//             } else {
//                 reject("not a number")
//             }
//         }, 2000);
//     })
// }
// valuePromise("hello").then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log(error);
// })


// Promise.all

const prom1 = new Promise((res, rej) => {
    setTimeout(() => res("first promise"), 1000);
});

const prom2 = new Promise((res, rej) => {
    setTimeout(() => res("second promise"), 2000);
});

const prom3 = new Promise((res, rej) => {
    setTimeout(() => res("third promise"), 3000);
});

// Promise.all([prom1, prom2, prom3])
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error);
// })

// Promise.any([promise1,promise2])

// Promise.any([prom1, prom2, prom3])
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     if (error instanceof AggregateError) {
//         for (let err of error.errors) {
//             console.log(err);
//         }
//     }
// });

// Promise.race([promise1,promise2])

Promise.race([prom1, prom2, prom3])
.then((data) => console.log(data))
.catch((error) => console.log(error));
