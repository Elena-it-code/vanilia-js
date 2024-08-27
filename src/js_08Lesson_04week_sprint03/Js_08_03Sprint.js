// 08 - Занятие по JS (Promises, async/await, static methods of Promise)


// *** ------- ***
// Все эти запросы выполнятся в произвольной последовательности.
// Смотря какой сервис быстрее даст ответ.
// Мы не можем тут сказать в какой последовательности они будут выполняться.

/*fetch(('https://bing.com/query=js')).then((data) => {
    console.log(data.url)
})

fetch(('https://google.com/query=js')).then((data) => {
    console.log(data.url)
})

fetch(('https://yahoo.com/query=js')).then((data) => {
    console.log(data.url)
})*/

/*fetch(('https://bing.com/query=js'))
    .then((data) => {
        console.log(data.url)
        fetch(('https://yahoo.com/query=js')).then((data) => {
            console.log(data.url)
        })
    })
    .then(() => {
        fetch(('https://google.com/query=js')).then((data) => {
            console.log(data.url)
        })

    })*/
// *** ------- ***


// *** ------- ***
// Чтобы гарантировать последовательность выполнения запросов, нам нужно правильно связать их через цепочку .then()
/*fetch(('https://bing.com/query=js'))
    .then((dataFromBing)=>{
        console.log(dataFromBing.url)
        return fetch('https://yahoo.com/query=js')
    })
    // .catch((error)=>{
    //     console.log('Error: ', error)
    //     //return error
    // })
    .then((dataFromYahoo)=>{
        console.log(dataFromYahoo.url)
        return fetch('https://google.com/query=js')
    })
    .then((dataFromGoogle)=>{
        console.log(dataFromGoogle.url)
    })
    .catch((error)=>{
        console.log('Error: ', error)
    })
    .then(()=>{
        console.log('Hi guys!!!!!')
    })*/

// *** Таким образом, каждый запрос выполняется последовательно, и мы гарантируем, что следующий запрос начнется только
// после завершения предыдущего.
// *** ------- ***


// *** ------- ***
// Все эти запросы выполнятся в строгой последовательности.
// Поскольку мы говорим и знаем, что они выполнятся в течении 2 секунд
// timeout1
// timeout2
// timeout3
/*setTimeout(()=>{
    console.log('timeout1')
}, 2000)

setTimeout(()=>{
    console.log('timeout2')
}, 2000)
setTimeout(()=>{
    console.log('timeout3')
}, 2000)*/
// *** ------- ***


// *** ------- ***
// Словить ОШИБКУ можем и методом .then(), он может принимать 2 параметра, 2 callback(а).
// 1) То чем он за- resolve(ится) , 2) то чем он за- reject(ится), т.е. словит ту самую ОШИБКУ.
// Ранее было именно так. Позже появился отдельный метод .catch(), для отловли ОШИБКИ
/*fetch(('https://bing.com/query=js')) // Здесь мы ловим ошибку самим  .then(), как вторым параметром
    .then((dataFromBing) => {
        console.log(dataFromBing.url)
    }, (error) => { // используем второй параметр
        console.log(error)
    })*/
// *** ОБЕ ЗАПИСИ ИНДЕНТИЧНЫ И ВЕРНЫ. НО ИСПОЛЬЗУЕТСЯ в настоящее время именно метод .catch() ***
/*fetch(('https://bing.com/query=js')) // Здесь мы ловим ошибку при помощи метода .catch()
    .then((dataFromBing) => {
        console.log(dataFromBing.url)
    })
    .catch((error) => { // метод .catch() - ловит ошибку
        console.log(error)
    })*/
// *** ------- ***


// *** ------- ***
/*fetch(('https://bing.com/query=js'))
    .then((dataFromBing)=>{
        console.log(dataFromBing.url)
        return fetch('https://yahoo.com/query=js')
    })
    .then((dataFromYahoo)=>{
        console.log(dataFromYahoo.url)
        return fetch('https://google.com/query=js')
    })
    .then((dataFromGoogle)=>{
        console.log(dataFromGoogle.url)
    })
    .catch((error)=>{
        console.log('Error: ', error)
    })*/
// *** ------- ***


// *** -------    asyng/await    --------- ***
// async/await - это синтаксический сахар для работы с промисами (promises), который позволяет писать асинхронный код,
// который выглядит и читается как синхронный.
// async: Используется перед функцией, чтобы указать, что эта функция возвращает промис.
// await: Используется внутри async-функции, чтобы остановить выполнение функции до тех пор, пока промис,
// переданный в await, не разрешится или не отклонится.
// const foo = async () => {
//     const dataFromBing = await fetch('https://bing.com/query=js')
//     console.log(dataFromBing.url)
//     const dataFromYahoo = await fetch('https://yahoo.com/query=js')
//     console.log(dataFromYahoo.url)
//     const dataFromGoogle = await fetch('https://google.com/query=js')
//     console.log(dataFromGoogle.url)
// }
//
// foo()
// *** ------- ***






// *** -------    asyng/await try/catch и  finally    --------- ***
// Если нужно отловить ошибку, то используем внутри asyng/await  -  try /catch, чтобы ее отловить.
// try/catch - это блоки, которые используются для обработки исключений в JavaScript.
// Они позволяют нам выполнить код, который может потенциально вызвать ошибку (try), и если такая
// ошибка возникает, поймать и обработать ее (catch).
// try: Блок кода, который может потенциально вызвать ошибку.
// catch: Блок кода, который обрабатывает ошибку. Он получает объект ошибки как аргумент.
// finally - это необязательный блок, который может быть добавлен после try/catch. Он выполняется всегда, независимо от
// того, была ли ошибка или нет.
import {user} from "../js_09_01/Js_09_01";

const foo1 = async () => {
    try {
        const dataFromBing = await fetch('https://bing.com/query=js')
        console.log(dataFromBing.url)
        const dataFromYahoo = await fetch('https://yahoo65895.com/query=js')
        console.log(dataFromYahoo.url)
        const dataFromGoogle = await fetch('https://google.com/query=js')
        console.log(dataFromGoogle.url)
    } catch (error) {   // отработает в случае ошибки
        console.log(error) // Обработка ошибки
    } finally {    // отработает в любом случае
        console.log("finally") // Код, который выполняется всегда
    }
}

foo1()
// *** ------- ***







// *** ------- ***
// Writing with function declaration:
async function XXX() {
}

// Writing with function expression using async
const YYY = async function () {
}
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .all()  ----- ***
// этот метод .all() - в себя принимает массивом, те Promise(ы), которые надо выполнить.
// Внезависимости от их очередности в которой они там выполнятся, запишутся в массив они в той же последовательности
// как мы их передали в массив. И как и все Promise(ы) наш  Promise возвращает новый промис.
// А это значит, что мы можем на него подписаться


const pr1 = fetch('https://bing.com/query=js')
const pr2 = fetch('https://google.com/query=js')
const pr3 = fetch('https://yahoo.com/query=js')

const superPromise = Promise.all([pr1, pr2, pr3])
superPromise.then((bigData) => {
    console.log(bigData[0].url)
    console.log(bigData[1].url)
    console.log(bigData[2].url)
    console.log('2') // выполнится только тогда, когда все три за- resolve(ятся), не раньше
})


// Более сокращенная запись без создания лишних переменных
Promise.all([
    fetch('https://bing.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://yahoo.com/query=js')
]).then((bigData) => {
    console.log(bigData[2].url)
}).catch((err)=>{
    console.log(err)
})
// Если хотя бы в одном ошибка, то Promise наш за- resolve(ится) и мы попадем в  .catch()
// Даже если какие-то уже успели выполнится
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .race()  ----- ***
// Этот метод ждет первое изменение статуса любого Promise(а), из числа переданных в него.
// Неважно за- resolve(ится) или за- reject(ится)
// Кто первый поменяет свое состояние на resolve или reject (любой статус)
// В том Promise, где ошибка, такой Promise возможно быстрее поменяет свой статус на reject,
// чем тот какой-то из Promise(ов) за- resolve(ится).
// То тогда наш Promise за- reject(ится),и  мы попадем в  .catch()
// !!! НО НЕ ВСЕГДА !!!
// Если какй-то из Promise за- resolve(ится) быстрее, чем какйо-то за- reject(ится), то мы попадем в .then()
// Т.е. нас инетресует ЛЮБОЕ!!!! первое изменение Promise(а) на resolve или reject (любой статус)

Promise.race([
    fetch('https://bing.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://yahoo.com/query=js'),
    fetch('https://duckduck.com/query=js')
]).then((data)=>{
    console.log(data.url)
}).catch((err)=>{
    console.log(err)
})
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .any()  ----- ***
// Этот метод дожидается любой положительный результат. Изменение статуса Promise(а) на resolve.
// Работает как логическое || (ИЛИ). Если есть хотя бы один true, а сотальные false, то будет true. Если все false, то тогда только false.
// Если все за- reject(ятся), то тогда наш Promise, который возвращает наш .any() - за- reject(ится). И как следствие попадем в .catch()
Promise.any([
    fetch('https://bing.com/query=js'),
    fetch('https://google.com/query=js'),
    fetch('https://yahoo.com/query=js'),
    fetch('https://duckduck.com/query=js')
]).then((data)=>{
    console.log(data.url)
}).catch((err)=>{
    console.log(err)
})
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .allSettled()  ----- ***
// Его главная особенность по сравнению с тремя предыдущими методами, что в .catch() мы НИКОГДА НЕ ПОПАДЕМ!!!
// Потому что этот Promise, который .allSettled() возвращает нам, он всегда resolve(ится)
// Просто resolve(ится) с разными массивом
// Даже если все переданные в нам массив имеют ошибку и за- reject(ятся). То наш Promise,
// который .allSettled() возвращает нам, он все равно resolve(ится)
// В этом масиве мы уже увидим все статусы переданных Promise(ов):      status: 'rejected' и причины, почему призощли ошибки
// В это методе .catch() - БЕСПОЛЕЗЕН.
// Мы в .then() уже обрабатываем результаты работы всех наших запросов
Promise.allSettled([
    fetch('https://bing66.com/query=js'),
    fetch('https://google33.com/query=js'),
    fetch('https://yahoo3.com/query=js'),
]).then((data)=>{
    console.log("Then ---------> ", data)
})
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .resolve()  ----- ***
// Статический метод `Promise.resolve()` в JavaScript используется для создания уже разрешенного (resolved) промиса
// с заданным значением. Этот метод может быть полезен в различных сценариях
// Вот несколько примеров использования:
//
//     1. **Заглушки (stubs) для разработки и тестирования**:
// - Когда вы разрабатываете функциональность, которая зависит от асинхронных операций, но сами операции еще
// не реализованы, вы можете использовать `Promise.resolve()` для создания заглушек.
// Это позволяет вам продолжать разработку, не блокируясь на ожидании реализации асинхронного кода.
// - Например:

     function fetchDataFromServer() {
       // Пока запрос на сервер не готов, используем заглушку
       return Promise.resolve({ data: 'mock data' });
     }


//     2. **Тестирование**:
// - При написании тестов для асинхронного кода, вы можете использовать `Promise.resolve()` для создания контролируемых
// условий. Это позволяет вам проверять, как ваш код обрабатывает успешные результаты асинхронных операций.
// - Например:
     test('should handle successful async operation', async () => {
       const result = await someAsyncFunction();
       expect(result).toEqual({ data: 'expected data' });
     });

     function someAsyncFunction() {
       return Promise.resolve({ data: 'expected data' });
     }

//    3. **Упрощение кода**:
// - Иногда `Promise.resolve()` может использоваться для упрощения кода, особенно когда вы хотите гарантировать,
// что какая-то часть кода всегда возвращает промис.
// - Например:
     function getUserData(userId) {
       if (!userId) {
         return Promise.resolve(null); // Возвращаем разрешенный промис с null
       }
       return fetch(`/api/user/${userId}`)
         .then(response => response.json());
     }

//    4. **Преобразование значений в промисы**:
// - Если у вас есть функция, которая может возвращать как промисы, так и обычные значения, вы можете использовать
// `Promise.resolve()` для унификации возвращаемых значений.
// - Например:
     function getData(value) {
       return Promise.resolve(value);
     }

     getData(42).then(result => console.log(result)); // 42
     getData(Promise.resolve(42)).then(result => console.log(result)); // 42


// В целом, `Promise.resolve()` является удобным инструментом для работы с промисами и может использоваться в различных
// контекстах для упрощения и улучшения управляемости асинхронного кода.
// *** ------- ***







// *** ------- ***
// *** ----   static methods of Promise     .reject()  ----- ***
// Статический метод `Promise.reject()` в JavaScript используется для создания уже отклоненного (rejected) промиса
// с заданной причиной ошибки. Этот метод также может быть полезен в различных сценариях,
// особенно при тестировании и разработке. Вот несколько примеров использования:

//     1. **Тестирование обработки ошибок**:
// - При написании тестов для асинхронного кода, вы можете использовать `Promise.reject()` для создания условий,
// когда асинхронная операция завершается с ошибкой. Это позволяет вам проверять,
// как ваш код обрабатывает исключительные ситуации.
// - Например:
     test('should handle failed async operation', async () => {
       try {
         await someAsyncFunction();
       } catch (error) {
         expect(error).toEqual(new Error('Something went wrong'));
       }
     });

     function someAsyncFunction() {
       return Promise.reject(new Error('Something went wrong'));
     }

// 2. **Заглушки (stubs) для разработки и тестирования**:
// - Аналогично `Promise.resolve()`, `Promise.reject()` может использоваться для создания заглушек,
// когда асинхронный код еще не готов или когда вы хотите симулировать ошибку.
// - Например:
     function fetchDataFromServer() {
       // Пока запрос на сервер не готов, используем заглушку для симуляции ошибки
       return Promise.reject(new Error('Server is down'));
     }


// 3. **Упрощение кода**:
// - Иногда `Promise.reject()` может использоваться для упрощения кода, особенно когда вы хотите гарантировать,
// что какая-то часть кода всегда возвращает отклоненный промис в определенных условиях.
// - Например:
     function getUserData(userId) {
       if (!userId) {
         return Promise.reject(new Error('User ID is required')); // Возвращаем отклоненный промис с ошибкой
       }
       return fetch(`/api/user/${userId}`)
         .then(response => response.json());
     }


// 4. **Создание централизованного обработчика ошибок**:
// - Вы можете использовать `Promise.reject()` для создания централизованного места, где обрабатываются и преобразуются
// ошибки перед тем, как они будут переданы дальше по цепочке промисов.
// - Например:
     function handleError(error) {
       const customError = new Error('Custom error message');
       customError.originalError = error;
       return Promise.reject(customError);
     }

     fetchDataFromServer()
       .catch(handleError)
       .catch(error => {
         console.error('Final error handler:', error.message);
       });


// В целом, `Promise.reject()` является важным инструментом для работы с промисами, особенно когда речь идет
// об обработке исключительных ситуаций и тестировании асинхронного кода.
// *** ------- ***







// *** ------- ***
// создание своего Promise(a)
function getNumber() {
    //return Promise.resolve(Math.random())
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(Math.random())
        }, 2000);
    })

    return promise
}

// getNumber().then((n)=>{console.log(n)})
// getNumber().then((n)=> console.log(n))

const repo = {
    save(data) {
        try {
            localStorage.setItem('some-key',  JSON.stringify(data))
        } catch (error) {
            return false
        }
        return true
    },
    saveAsync(data) {
        const promise = new Promise((resolve, reject) => {
            try {
                localStorage.setItem('some-key',  JSON.stringify(data))
                resolve()
            } catch (error) {
                reject(error)
            }
        })

        return promise
    },
    read() {

        const data = localStorage.getItem('some-key')
        if(!data) {
            return null
        } else {
            return JSON.parse(data)
        }
    },
    readAsync() {
        return new Promise((resolve, reject)=>{
            const data = localStorage.getItem('some-key')
            if(!data) {
                resolve(null)
            } else {
                resolve(JSON.parse(data))
            }
        })
    }
}

// Cинхронная версия Promise
const result = repo.save({name: 'IT-Incubator'})
if (result) {
    console.log('SAVED')
} else {
    console.warn('NOT SAVED')
}

// Асинхронная версия Promise
repo.saveAsync({name: 'IT-Incubator'})
    .then(()=> console.log('SAVED'))
    .catch((error)=> console.warn('NOT SAVED: ' + error))

const run = async () => {
    await repo.saveAsync({name: 'IT-Incubator'})
    console.log('SAVED')

    const data = await repo.readAsync()
    console.log(data)
}

run()



setTimeout(()=>{
    console.log(1)
    setTimeout(()=>{
        console.log(2)
        setTimeout(()=>{
            console.log(3)
        }, 3000)
    }, 2000)
}, 1000)


function wait(ms) {
    // return new Promise(resolve => setTimeout(resolve, ms));
    return new Promise((res)=>{
        setTimeout(()=>{res()}, ms)
    });
}
async function run2() {
    await wait(1000)
    console.log(1)
    await wait(1000)
    console.log(2)
    await wait(1000)
    console.log(3)
}

run2()
// *** ------- ***







// *** ------- ***
let findUserInDB = (id) => {
    const users = [
        {id: 1, name: 'Dmitriy', friend: 3},
        {id: 2, name: 'Elena', friend: null},
        {id: 3, name: 'Oleg', friend: 2},
    ]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(u => u.id == id);
            if (user == null) {
                reject('user is not found')
            } else {
                resolve(user)
            }
        }, randomIntFromInterval(500, 1500))
    })
}

function randomIntFromInterval(max, min) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}


findUserInDB(2)
    .then(user =>{
        console.log(user.name)
        return user.friend
    })
    .then(friendId => findUserInDB(friendId))
    .then(friend1 => {
        console.log(friend1.name)
        return friend1.friend
    })
    .then(friendId => findUserInDB(friendId))
    .then(friend2 =>console.log(friend2.name))



// пример try/catch через синтаксис async / await
async function run3() {
    try{
        let user = await findUserInDB(1)
        console.log(user.name)
        let friend1 // вынесли эту переменную во внешний скоп относительно этих двух блоков, где мы ее юзаем
        try {
            friend1 = await findUserInDB(user.friend)
        } catch (error) {
            friend1 = { name: 'Friend Bot', friend: 3}
        }
        console.log(friend1.name)
        let friend2 = await findUserInDB(friend1.friend)
        console.log(friend2.name)
    } catch (error) { // какая бы ошибка во всей этой цепочке не произошла мы ее перехватим
        alert(error)
    }

}

run3()