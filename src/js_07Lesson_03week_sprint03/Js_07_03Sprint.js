// promise

// const fetch = (url, callback) => {
//   //....

//   callback(err, data);
// };

// fetch("https://books.com/authors", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fetch("https://books.com/authors/75", (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         fetch("https://books.com/authors/75/books", (err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             fetch("https://books.com/authors/75/books/102", (err, data) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 fetch(
//                   "https://books.com/authors/75/books/102/p333",
//                   (err, data) => {
//                     if (err) {
//                       console.log(err);
//                     } else {
//                     }
//                   }
//                 );
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

// fetch("https://books.com/authors")
//   .then((data) => {
//     return fetch("https://books.com/authors/75");
//   })
//   .then((data) => {
//     return fetch("https://books.com/authors/75/books");
//   })
//   .then((data) => {
//     return fetch("https://books.com/authors/75/books/102");
//   })
//   .then((data) => {
//     return fetch("https://books.com/authors/75/books/102/p333");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// axios.get("https://books.com/authors/75/books/102")
// 	.then((data) => {
// 		dispatch(data)
// 	})
// 	.catch((err) => {
// 		console.log(err)
// 		alert('sorry ')
// 	})

// pending |
// function NewPromise(cb) {
//   const resolve = (result) => {
//     return {
//       state: "fulfilled",
//       result: result,
//     };
//   };

//   const reject = (err) => {
//     return {
//       state: "rejected",
//       result: err,
//     };
//   };

//   cb(resolve, reject);
// }

// const fs = require("fs");

// const readFile = (path) => {
//   return new Promise((res, rej) => {
//     fs.readFile(path, (err, file) => {
//       if (err) {
//         rej(err);
//       } else {
//         res(file);
//       }
//     });
//   });
// };

// const pr = readFile("./index.js");

// const server = {
//   getData() {
//     return new Promise((res, rej) => {
//       //...
//       //...
//       setTimeout(() => {
//         rej("reject1");
//         // res("some data");
//       }, 1000);
//     });
//   },
// };

// server
//   .getData()
//   .then((t) => "then1")
//   .catch((t) => t + "catch1")
//   .catch((t) => t + "catch2")
//   .then((t) => t + "then1")
//   .finally((t) => t + "finally")
//   .then((t) => console.log(t));

// const promise = server.getData();

// promise
//   .then((data) => {
//     console.log("Then1 ", data);
//     return 10;
//   })
//   .then((data) => {
//     console.log("Then2 ", data);
//     // throw new Error("ERROR");
//   })
//   .then((data) => {
//     console.log("Then3 ", data);
//   })
//   .catch((err) => {
//     console.log("Catch1 ", err);
//     // throw new Error("ERROR");
//     return 20;
//   })
//   .finally((data) => {
//     console.log("Finally1 ", data);
//     return 30;
//   })
//   .then((data) => {
//     console.log("Then4 ", data);
//   })
//   .catch((err) => {
//     console.log("Catch2 ", err);
//   })
//   .finally((data) => {
//     console.log("Finally2 ", data);
//     throw new Error("ERROR");
//     return 30;
//   })
//   .then((data) => {
//     console.log("Then5 ", data);
//   })
//   .catch((err) => {
//     console.log("Catch3 ", err);
//   });

//Напишите функцию delay(ms), которая возвращает промис,
//переходящий в состояние "resolved" через ms миллисекунд.
//Пример использования:

// const delay = (time) => {
//   return new Promise((res) => {
//     setTimeout(res, time);
//   });
// };

// delay(2000).then(() => {
//   console.log("Hello");
// });

const delay = (ms) => {
    return new Promise((res, rej) => {
        setTimeout(res, ms);
    });
};

delay(1000).then(() => console.log("Hello!"));
