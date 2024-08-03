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

// const delay = (ms) => {
//     return new Promise((res, rej) => {
//         setTimeout(res, ms);
//     });
// };
//
// delay(1000).then(() => console.log("Hello!"));



// задача для закрепления знаний
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fetched Data");
            // reject(new Error("Failed to fetch data"));
        }, 1000);
    });
};

fetchData()
    .then((data) => {
        console.log("Step 1:", data);
        return data + " -> Processed by Step 1";
    })
    .then((data) => {
        console.log("Step 2:", data);
        if (data.includes("Processed")) {
            throw new Error("Error at Step 2");
        }
        return data + " -> Further Processed by Step 2";
    })
    .catch((err) => {
        console.log("Error caught:", err.message);
        return "Recovered from Step 2 Error";
    })
    .finally(() => {
        console.log("Finally 1: Cleanup after Step 2");
    })
    .then((data) => {
        console.log("Step 3:", data);
        return new Promise((resolve) => {
            setTimeout(() => resolve(data + " -> Step 3 Complete"), 500);
        });
    })
    .finally(() => {
        console.log("Finally 2: Cleanup after Step 3");
    })
    .then((data) => {
        console.log("Step 4:", data);
        // Uncomment the next line to introduce an error
        // throw new Error("Unexpected error at Step 4");
        return "All steps completed successfully!";
    })
    .catch((err) => {
        console.log("Final Catch:", err.message);
    })
    .finally(() => {
        console.log("Finally 3: Final cleanup");
    });

/*Описание задачи:
fetchData:

Функция возвращает промис, который через 1 секунду резолвится строкой "Fetched Data".
Если раскомментировать строку с reject, промис завершится с ошибкой "Failed to fetch data".
Step 1:

Выводит "Step 1: Fetched Data".
Возвращает строку "Fetched Data -> Processed by Step 1".
Step 2:

Выводит "Step 2: Fetched Data -> Processed by Step 1".
Если строка содержит слово "Processed", генерируется ошибка "Error at Step 2".
Catch:

Перехватывает ошибку и выводит её сообщение, возвращает "Recovered from Step 2 Error".
Finally 1:

Выполняется после Step 2 и вывода ошибки (если она произошла), выводит "Finally 1: Cleanup after Step 2".
Step 3:

Выводит "Step 3: Recovered from Step 2 Error".
Возвращает новый промис, который через 500 мс резолвится строкой "Recovered from Step 2 Error -> Step 3 Complete".
Finally 2:

Выполняется после Step 3, выводит "Finally 2: Cleanup after Step 3".
Step 4:

Выводит "Step 4: Recovered from Step 2 Error -> Step 3 Complete".
Если раскомментировать строку с ошибкой, она будет перехвачена в следующем catch.
Final Catch:

Перехватывает ошибку из Step 4 (если есть), выводит её сообщение.
Finally 3:

Выполняется в любом случае после Step 4, выводит "Finally 3: Final cleanup".
Задание:
Поймите последовательность выполнения then, catch, и finally блоков.
Попробуйте раскомментировать строки, которые вызывают ошибки, и проследите, как это влияет на цепочку промисов.
Попробуйте изменить время задержки в fetchData и Step 3, чтобы увидеть, как это изменит время выполнения промисов.*/

